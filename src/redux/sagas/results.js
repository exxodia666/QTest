import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  loadResultsError,
  loadResultsSuccess,
  LOAD_RESULTS,
} from "../actions/results";

const fetchData = (id) =>
  Axios({
    method: "get",
    url: `https://questimie.herokuapp.com/api/dude/${id}`,
  });

function* workerLoadData(action) {
  try {
    const data = yield call(fetchData, action.payload);
    yield put(loadResultsSuccess(data));
  } catch (e) {
    yield put(loadResultsError(e));
  }
}
export function* watchLoadResults() {
  try {
    yield takeEvery(LOAD_RESULTS, workerLoadData);
  } catch (e) {
    console.log(e);
  }
}
