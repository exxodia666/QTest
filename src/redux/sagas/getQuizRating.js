import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { loadQuizRatingError, loadQuizRatingSuccess, LOAD_QUIZ_RATING } from "../actions/get_quiz_rating";

const fetchData = (quizId) => Axios({
    method: "get",
    url: `https://questimie.herokuapp.com/api/${quizId}/answer/`,
  });

export function* watchLoadQuizRating() {
    try {
      yield takeEvery(LOAD_QUIZ_RATING, workerGetQuizRating);
    } catch (e) {
      console.log(e);
    }
  }

  function* workerGetQuizRating(action) {
    try {
      const data = yield call(fetchData, action.payload);
      yield put(loadQuizRatingSuccess(data));
    } catch (e) {
      yield put(loadQuizRatingError(e));
    }
  }