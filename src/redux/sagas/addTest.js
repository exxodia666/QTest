import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_TEST,
  add_test_error,
  add_test_success,
} from "../actions/add_test";

// const sendTest = (quiz) => {
//   console.log(JSON.stringify(quiz));
//   return axios.post(`http://134.249.181.40:7777/api/`, quiz);
// };

const sendTest = (quiz) => {
  console.log(quiz);
  return axios({
    method: "post",
    url: "http://134.249.181.40:7777/api/",
    data: quiz,
  });
};

// const sendImages = (images) => {
//   console.log(images);
//   return axios({
//     method: "post",
//     url: "http://134.249.181.40:7777/api/img",
//     data: images,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "multipart/form-data",
//     },
//   });
// const fd = new FormData();
// const imgblob = new Blob([quiz], { type: "image/jpeg" });
// fd.append("myimage", imgblob);
// return axios({
//   method: "post",
//   url: "http://134.249.181.40:7777/api/",
//   data: quiz,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "multipart/form-data",
//   },
// });
//};

function* workerSendData(action) {
  console.log(action.payload);
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
