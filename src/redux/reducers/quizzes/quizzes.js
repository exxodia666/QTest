import {
  SHOW_QUIZZES,
  SET_SELECTED,
  SET_DONE,
  CLEAR_QUIZ,
} from "../../actions/show_quizzes";

const initialState = { status: null, quiz: {}, questions: [] };
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_QUIZ:
      return { ...initialState };

    case SHOW_QUIZZES:
      const newArray = action.payload.data.questions.map((item) => {
        let newChoices = item.choices.map((i) => ({ ...i, isSelected: false }));
        item.choices = newChoices;
        item.isDone = false;
        return item;
      });
      const newObj = {
        status: action.payload.status,
        questions: newArray,
        quiz: action.payload.data.quiz,
      };
      return newObj;

    case SET_DONE:
      ///TODO REFUCKTOR
      const found = state.questions.find(
        (element) => element.question.id === action.payload
      );
      const index = state.questions.indexOf(found);
      const newobj = { ...state };
      newobj.questions[index].isDone = true;

      return { ...newobj };
    case SET_SELECTED:
      ///TODO REFUCKTOR
      const newState = { ...state };
      const foundQ = newState.questions.find(
        (element) => element.question.id === action.payload.id
      );
      const indexQ = newState.questions.indexOf(foundQ);
      //newState.questions[indexQ].choices.map((i) => );
      const foundA = newState.questions[indexQ].choices.find((element) => {
        return element.id === action.payload.answ;
      });
      const indexA = newState.questions[indexQ].choices.indexOf(foundA);
      if (!newState.questions[indexQ].question.is_multiple_choice) {
        let newChoices = newState.questions[indexQ].choices.map((i) => ({
          ...i,
          isSelected: false,
        }));

        newState.questions[indexQ].choices = newChoices;
      }

      newState.questions[indexQ].choices[indexA].isSelected = !newState
        .questions[indexQ].choices[indexA].isSelected;
      return { ...newState };
    default:
      return state;
  }
};
