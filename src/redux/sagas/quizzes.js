import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  loadQuizzesError,
  LOAD_QUIZZES,
  showQuizzes,
} from "../actions/show_quizzes";

const fetchData = (p) => Axios.get(`https://questimie.herokuapp.com/api/${p}`);

function* workerLoadData(action) {
  try {
    const data = yield call(fetchData, action.payload);
    yield put(showQuizzes(data));
  } catch (e) {
    yield put(loadQuizzesError(e.message));
  }
}

export function* watchLoadData() {
  try {
    yield takeEvery(LOAD_QUIZZES, workerLoadData);
  } catch (e) {
     console.log(e);
  }
}
