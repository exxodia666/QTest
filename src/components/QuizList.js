import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveAnswers } from "../redux/actions/save_answers";
import { sendAnswers } from "../redux/actions/send_answers";
import { loadQuizzes } from "../redux/actions/show_quizzes";

export default function QuizList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  const results = useSelector((state) => state.results);
  const answersStore = useSelector((state) => state.answers);
  console.log(
    "🚀 ~ file: QuizList.js ~ line 12 ~ QuizList ~ answersStore",
    answersStore
  );
  const user = "Sanya";

  useEffect(() => {
    dispatch(loadQuizzes("todos"));
  }, [dispatch]);

  const submitAnswers = () => {
    console.log("🚀ДЕБАГ РАКЕТА ЗАЛЕТАЄ");
    dispatch(
      sendAnswers({
        name: "Sanya",
        answers: [
          {
            question_id: "4daf1510-303c-4add-925a-7b37ba2b5a26",
            choices_id: ["8e117a35-d7e2-4c27-a618-8f35ba9449dc"],
          },
          {
            question_id: "c9837f23-7042-46ca-9534-a3e7cd826b6c",
            choices_id: ["2ff5cf19-5f38-431d-82ba-76197bc780a5"],
          },
        ],
      })
    );
  };

  if (state.questions.length) {
    return (
      <>
        {results.status && (
          <p>
            {results.data.name}: {results.data.rating}
          </p>
        )}
        <ul>
          {state.questions.map((item) => (
            <li key={item.question.id}>
              {item.question.wording}
              <ul>
                {item.choices.map((i) => (
                  <>
                    <li>{i.text}</li>
                  </>
                ))}
              </ul>
              <button
                onClick={() => {
                  const answer = {
                    question_id: item.question.id,
                    choices_id: item.choices[0].id,
                  };
                  //console.log(item);
                  dispatch(saveAnswers({ answer: answer, name: user }));
                }}
              >
                Answer
              </button>
            </li>
          ))}
        </ul>
        <button onClick={submitAnswers}>Submit</button>
        {answersStore && (
          <>
            <p>{answersStore.name}</p>
            <ul>
              {answersStore.answers.map((item) => (
                <li>
                  <p>Question: {item.question_id}</p>
                  <p>Choice: {item.choices_id}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  } else {
    return (
      <div>
        <button onClick={() => dispatch(loadQuizzes())}>SAGA HUINYA</button>;
      </div>
    );
  }
}
