import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_TEST,
  add_test_error,
  add_test_success,
} from "../actions/add_test";

const sendTest = (obj) => Axios.post(`http://134.249.181.40:7777/api/`, obj);

function* workerSendData(action) {
  console.log(action.payload);
  //   const reqObj = {
  //     name: action.payload.user,
  //     answers: action.payload.obj.map((item) => ({
  //       question_id: item.question.id,
  //       choices_id: item.choices
  //         .filter((i) => i.isSelected)
  //         .map((i) => {
  //           return i.id;
  //         }),
  //     })),
  //   };
  try {
    const res = yield call(sendTest, { obj: action.payload });
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
