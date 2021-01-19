import { ADD_NEW_QUIZ } from "../../actions/add_quizze";

const addedQuizzes = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_QUIZ:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default addedQuizzes;
