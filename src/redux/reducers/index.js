import { combineReducers } from "redux";
import quizzes from "./quizzes/quizzes";
import results from "./results/results";
import answers from "./answers/answer";

export default combineReducers({
  quizzes,
  results,
  answers,
});
