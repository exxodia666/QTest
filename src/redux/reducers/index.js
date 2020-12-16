import { combineReducers } from "redux";
import quizzes from "./quizzes/quizzes";
import results from "./results/results";
export default combineReducers({
  quizzes,
  results,
});
