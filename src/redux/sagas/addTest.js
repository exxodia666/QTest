import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_TEST,
  add_test_error,
  add_test_success,
} from "../actions/add_test";

const sendTest = (quiz) => Axios.post(`http://134.249.181.40:7777/api/`, quiz);

function* workerSendData(action) {
  console.log(action.payload);
  try {
    const res = yield call(sendTest, { quiz: action.payload });
    console.log(res);
    yield put(add_test_success(res));
  } catch (e) {
    yield put(add_test_error(e));
  }
}

export function* watchSendNewTest() {
  try {
    yield takeEvery(ADD_TEST, workerSendData);
  } catch (e) {
    ///
  }
}
