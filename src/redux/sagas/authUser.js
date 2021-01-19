import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  ADD_USER,
  DELETE_USER,
  login_success,
  req_error,
  logout_success,
} from "../actions/add_user";

const login = (name) => {
  const req = {
    name: name,
  };
  return axios({
    method: "post",
    url: "https://questimie.herokuapp.com/api/dude",
    data: { dude: req },
  });
};

const logout = ({ id, key }) => {
  const req = { editing_key: key };
  return axios({
    method: "delete",
    url: `https://questimie.herokuapp.com/api/dude/${id}`,
    data: req,
  });
};

function* workerLogin(action) {
  try {
    const res = yield call(login, action.payload);
    yield put(login_success(res));
  } catch (e) {
    yield put(req_error(e));
  }
}
export function* watchLogin() {
  try {
    yield takeEvery(ADD_USER, workerLogin);
  } catch (e) {}
}
function* workerLogout(action) {
  try {
    const res = yield call(logout, { ...action.payload });
    yield put(logout_success(res));
  } catch (e) {
    yield put(req_error(e));
  }
}

export function* watchLogout() {
  try {
    yield takeEvery(DELETE_USER, workerLogout);
  } catch (e) {
    ///
  }
}
