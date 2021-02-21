import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  save_image,
  SEND_IMAGE,
  send_image_error,
} from "../actions/save_image";

const sendImages = (images) => {
  console.log(images);
  return axios({
    method: "post",
    url: "https://questimie.herokuapp.com/api/image",
    data: images,
  });
};

function* workerSendData(action) {
  try {
    const res = yield call(sendImages, action.payload);
    yield put(save_image(res));
  } catch (e) {
    yield put(send_image_error(e));
  }
}

export function* watchSendNewImage() {
  try {
    yield takeEvery(SEND_IMAGE, workerSendData);
  } catch (e) {
    console.log(e);
  }
}
