//import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_QUIZZES, showQuizzes } from "../actions/show_quizzes";

//const fetchData = (p) => Axios.get(`https://jsonplaceholder.typicode.com/${p}`);

const fetchQuizzes = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve(
          '{"quiz":{"id":1,"quiz_name":"First quiz","creation_date":"2020-12-15T11:32:27.153608+02:00"},"questions":[{"question":{"id":1,"quiz_id":1,"wording":"Whats up Dude?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":1,"question_id":1,"text":"Good"},{"id":2,"question_id":1,"text":"Could be better"},{"id":3,"question_id":1,"text":"Bad"}]},{"question":{"id":2,"quiz_id":1,"wording":"Do you like this","text":"","image":"","is_multiple_choice":false},"choices":[{"id":4,"question_id":2,"text":"Yep"},{"id":5,"question_id":2,"text":"Could be better"},{"id":6,"question_id":2,"text":"Nope"}]}]}'
        );
      }
    }, 0.5);
  });
};

function* workerLoadData(action) {
  const json_data = yield call(fetchQuizzes, action.payload);
  const data = JSON.parse(json_data);
  yield put(showQuizzes(data));
}

export function* watchLoadData() {
  try {
    yield takeEvery(LOAD_QUIZZES, workerLoadData);
  } catch (e) {
    console.log(e);
  }
}
//const jsonData = `{"quiz":{"id":1,"quiz_name":"First quiz","creation_date":"2020-12-15T11:32:27.153608+02:00"},"questions":[[{"question":{"id":1,"quiz_id":1,"wording":"Whats up?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":1,"question_id":1,"text":"Good"},{"id":2,"question_id":1,"text":"Could be better"},{"id":3,"question_id":1,"text":"Bad"}]}],[{"question":{"id":2,"quiz_id":1,"wording":"Do you like this","text":"","image":"","is_multiple_choice":false},"choices":[{"id":4,"question_id":2,"text":"Yep"},{"id":5,"question_id":2,"text":"Could be better"},{"id":6,"question_id":2,"text":"Nope"}]}]]}`;
//console.log(JSON.parse(jsonData));