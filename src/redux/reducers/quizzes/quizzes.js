import { SHOW_QUIZZES } from "../../actions/show_quizzes";

const initialState = { questions: [] };
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUIZZES:
      return { ...action.payload };
    default:
      return state;
  }
};
