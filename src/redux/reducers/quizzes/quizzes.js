import { SHOW_QUIZZES, SET_SELECTED } from "../../actions/show_quizzes";

const initialState = { quiz: {}, questions: [] };
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUIZZES:
      const newArray = action.payload.questions.map((item) => {
        let newChoices = item.choices.map((i) => ({ ...i, isSelected: false }));
        item.choices = newChoices;
        return item;
      });
      return { questions: newArray, quiz: action.payload.quiz };
    case SET_DONE:
      ///TODO REFUCKTOR
      const found = state.questions.find(
        (element) => element.question.id === action.payload
      );
      const index = state.questions.indexOf(found);
      const newObj = { ...state };
      newObj.questions[index].isDone = true;
      console.log(newObj);
      return { ...newObj };

    case SET_SELECTED:
      ///TODO REFUCKTOR
      const newState = { ...state };
      const foundQ = newState.questions.find(
        (element) => element.question.id === action.payload.id
      );
      const indexQ = newState.questions.indexOf(foundQ);
      newState.questions[indexQ].choices.map((i) => console.log(i));
      const foundA = newState.questions[indexQ].choices.find((element) => {
        return element.id === action.payload.answ;
      });
      const indexA = newState.questions[indexQ].choices.indexOf(foundA);
      if (!newState.questions[indexQ].question.is_multiple_choice) {
        let newChoices = newState.questions[indexQ].choices.map((i) => ({
          ...i,
          isSelected: false,
        }));
        console.log(newChoices);
        newState.questions[indexQ].choices = newChoices;
      }

      newState.questions[indexQ].choices[indexA].isSelected = !newState
        .questions[indexQ].choices[indexA].isSelected;
      return { ...newState };
    default:
      return state;
  }
};
