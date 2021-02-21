import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_TEST,
  add_test_error,
  add_test_success,
} from "../actions/add_test";

const sendTest = (quiz) => {
  return axios({
    method: "post",
    url: "https://questimie.herokuapp.com/api/",
    data: quiz,
  });
};
function* workerSendData(action) {
  try {
    const res = yield call(sendTest, { quiz: action.payload });
    //const img_res = yield call(sendImages, { images: [] });
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
