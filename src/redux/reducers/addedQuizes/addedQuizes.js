import { ADD_NEW_QUIZ } from "../../actions/add_quizze";


export default (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_QUIZ:
     // console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};