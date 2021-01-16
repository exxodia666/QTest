import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  loadResultsError,
  loadResultsSuccess,
  LOAD_RESULTS,
} from "../actions/results";

// const req = { editing_key: key };
// return axios({
//   method: "delete",
//   url: `http://134.249.181.40:7777/api/dude/${id}`,
//   data: req,
// });
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
//const jsonData = `{"quiz":{"id":1,"quiz_name":"First quiz","creation_date":"2020-12-15T11:32:27.153608+02:00"},"questions":[[{"question":{"id":1,"quiz_id":1,"wording":"Whats up?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":1,"question_id":1,"text":"Good"},{"id":2,"question_id":1,"text":"Could be better"},{"id":3,"question_id":1,"text":"Bad"}]}],[{"question":{"id":2,"quiz_id":1,"wording":"Do you like this","text":"","image":"","is_multiple_choice":false},"choices":[{"id":4,"question_id":2,"text":"Yep"},{"id":5,"question_id":2,"text":"Could be better"},{"id":6,"question_id":2,"text":"Nope"}]}]]}`;
//console.log(JSON.parse(jsonData));
