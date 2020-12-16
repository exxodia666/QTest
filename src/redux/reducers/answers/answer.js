import { SAVE_ANSWERS } from "../../actions/save_answers";
import {} from "../../actions/show_quizzes";

const initialState = {
  name: null,
  answers: [],
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ANSWERS:
      const newAnswers = [...state.answers];

      console.log("Payload: ");
      console.log(action.payload);
      newAnswers.push(action.payload.answer);
      console.log("🚀 ~ file: answer.js ~ line 25 ~ newAnswers", newAnswers);
      return {
        name: action.payload.name,
        answers: newAnswers,
      };
    default:
      return state;
  }
};
