import Axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { LOAD_QUIZZES, showQuizzes } from "../actions/show_quizzes";
//TODO SWITCH QUIZZES
const fetchData = () =>
  Axios.get(
    `http://134.249.181.40:7777/api/fe8ba3b8-2075-4272-aa61-036d34d4192c/`
  );

// const fetchData = (p) =>
//   Axios.get(
//     "http://134.249.181.40:7777/api/fe8ba3b8-2075-4272-aa61-036d34d4192c/"
//   );

// const fetchQuizzes = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id) {
//         resolve(
//           '{"quiz":{"id":2,"quiz_name":"Second Quiz","creation_date":"2020-12-15T21:04:02.136088+02:00"},"questions":[{"question":{"id":3,"quiz_id":2,"wording":"Как так?","text":"Ну как","image":"https://cdn.discordapp.com/attachments/709748357572198421/787351142039289856/photo_2020-12-08_19-10-34.jpg","is_multiple_choice":true},"choices":[{"id":7,"question_id":3,"text":"Вот так"},{"id":8,"question_id":3,"text":"Не так"},{"id":9,"question_id":3,"text":"Как то так"},{"id":10,"question_id":3,"text":"Макс криса"}]},{"question":{"id":4,"quiz_id":2,"wording":"Макс криса?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":11,"question_id":4,"text":"Да"},{"id":12,"question_id":4,"text":"Сто проц"},{"id":13,"question_id":4,"text":"Базару ноль"},{"id":14,"question_id":4,"text":"Бля буду"}]},{"question":{"id":7,"quiz_id":2,"wording":"Де находиться голова Яріка?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":21,"question_id":7,"text":"В унітазі"},{"id":22,"question_id":7,"text":"В банці з доларами"},{"id":23,"question_id":7,"text":"вона проіграла"}]},{"question":{"id":8,"quiz_id":2,"wording":"Як начать дєлать цапара?","text":"","image":"","is_multiple_choice":false},"choices":[{"id":24,"question_id":8,"text":"Ніяк"},{"id":25,"question_id":8,"text":"Якось нада"},{"id":26,"question_id":8,"text":"Іди нахуй"}]}]}'
//         );
//       }
//     }, 500);
//   });
// };

function* workerLoadData(action) {
  const data = yield call(fetchData, action.payload);
  // console.log(data);
  // //const data = JSON.parse(json_data);
  // yield put(showQuizzes(data.data));
  // const data = yield call(fetchData, action.payload);
  // //const dataJ = JSON.parse(data);
  // console.log(data);
  yield put(showQuizzes(data.data));
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
