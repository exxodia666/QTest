import { combineReducers } from "redux";
import quizzes from "./quizzes/quizzes";
import results from "./results/results";
import answers from "./answers/answer";
import quiz_list from "./quiz_list/quiz_list";

export default combineReducers({
  quizzes,
  results,
  answers,
  quiz_list,
});
