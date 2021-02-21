import { combineReducers } from "redux";
import quizzes from "./quizzes/quizzes";
import results from "./results/results";
import answers from "./answers/answer";
import quiz_list from "./quiz_list/quiz_list";
import addedQuizes from "./addedQuizes/addedQuizes";
import user from "./add_user/add_user.js";
import quiz_rating from "./quiz_rating/quiz_rating";
import add_test from "./add_test";
export default combineReducers({
  quizzes,
  results,
  answers,
  quiz_list,
  addedQuizes,
  user,
  add_test,
  quiz_rating,
});
