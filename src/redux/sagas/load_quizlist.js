import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_QUIZ_LIST, showQuizList } from "../actions/load_quiz_list";

const fetchData = () => Axios.get("https://questimie.herokuapp.com/api/");

function* workerLoadData() {
  try {
    const data = yield call(fetchData);
    yield put(showQuizList(data));
  } catch (e) {
    yield put(showQuizList({ status: 404, message: e.message }));
  }
}

export function* watchLoadQuizList() {
  try {
    yield takeEvery(LOAD_QUIZ_LIST, workerLoadData);
  } catch (e) {
    console.log(e);
  }
}
