import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { addResults } from "../actions/results";
import { SEND_ANSWERS } from "../actions/send_answers";
import { clearQuiz } from "../actions/show_quizzes";

const sendAnswers = ({ obj, id }) =>
  Axios.post(`http://134.249.181.40:7777/api/${id}/answer/`, obj);
//TODO NORMAL USER
function* workerSendData(action) {
  const reqObj = {
    name: "Sanya",
    answers: action.payload.obj.map((item) => ({
      question_id: item.question.id,
      choices_id: item.choices
        .filter((i) => i.isSelected)
        .map((i) => {
          return i.id;
        }),
    })),
  };
  const res = yield call(sendAnswers, { obj: reqObj, id: action.payload.id });
  yield put(addResults(res));
}

export function* watchSendData() {
  try {
    yield takeEvery(SEND_ANSWERS, workerSendData);
  } catch (e) {
    console.log(e);
  }
}
//const jsonData = `{"quiz":{"id":1,"quiz_name":"First quiz","creation_date":"2020-12-15T11:32:27.153608+02:00"},"questions":[[{"question":{"id":1,"quiz_id":1,"wording":"Whats up?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":1,"question_id":1,"text":"Good"},{"id":2,"question_id":1,"text":"Could be better"},{"id":3,"question_id":1,"text":"Bad"}]}],[{"question":{"id":2,"quiz_id":1,"wording":"Do you like this","text":"","image":"","is_multiple_choice":false},"choices":[{"id":4,"question_id":2,"text":"Yep"},{"id":5,"question_id":2,"text":"Could be better"},{"id":6,"question_id":2,"text":"Nope"}]}]]}`;
//console.log(JSON.parse(jsonData));
