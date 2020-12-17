import { SHOW_QUIZZES, SET_DONE } from "../../actions/show_quizzes";

const initialState = { quiz: {}, questions: [] };
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUIZZES:
      console.log(action.payload);
      const newArray = action.payload.questions.map((item) => {
        const temp = { ...item, isDone: false };
        return temp;
      });
      console.log(newArray);
      return { ...action.payload, questions: newArray };
    case SET_DONE:
      ///TODO REFUCKTOR
      const found = state.questions.find(
        (element) => element.question.id === action.payload
      );
      const index = state.questions.indexOf(found);
      const newState = { ...state };
      newState.questions[index].isDone = true;
      console.log(newState);
      return { ...newState };
    default:
      return state;
  }
};
