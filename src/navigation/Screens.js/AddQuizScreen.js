import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_test, reset_add_test } from "../../redux/actions/add_test";
import QuestionComponent from "../../components/Form/Question";
import "./styles/global-master.css";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
//import "../../components/Form/checkbox.css"

export default function AddQuizScreen() {
  const dispatch = useDispatch();
  const test_status = useSelector((state) => state.add_test);
  console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:", test_status);
  const history = useHistory();
  const [array, setArray] = useState([
    {
      question_id: 0,
      choises: [
        {
          choise_id: 0,
          isCorect: false,
        },
        {
          choise_id: 1,
          isCorect: false,
        },
      ],
    },
  ]);

  const user = useSelector((state) => state.user.loggedIn);

  if (!user) {
    history.push("/");
  }

  React.useEffect(() => {
    return () => {
      dispatch(reset_add_test());
    };
  }, [dispatch]);

  function saveQuizName() {
    const inputs = document.querySelectorAll("input, textarea");
    console.log(inputs);
    const data = {
      quiz_name: "",
      questions: [],
    };
    console.log(inputs);
    Array.from(inputs).forEach((el) => {
      let armel = el.name.split("-");
      switch (armel[0]) {
        case "quiz":
          data[armel[1]] = el.value !== "on" ? el.value : el.checked;
          break;
        case "question":
          if (data.questions[parseInt(armel[2])]) {
            data.questions[parseInt(armel[2])][armel[1]] = el.checked
              ? el.type == "checkbox"
              : el.value;
          } else {
            data.questions[parseInt(armel[2])] = {
              [armel[1]]: el.value !== "on" ? el.value : el.checked,
              choices: [],
            };
          }
          break;
        case "choice":
          if (
            data.questions[parseInt(armel[2])]["choices"][parseInt(armel[3])]
          ) {
            data.questions[parseInt(armel[2])]["choices"][parseInt(armel[3])][
              armel[1]
            ] = el.value !== "on" ? el.value : el.checked;
          } else {
            data.questions[parseInt(armel[2])]["choices"][
              parseInt(armel[3])
            ] = { [armel[1]]: el.value !== "on" ? el.value : el.checked };
          }
          break;
        default:
          break;
      }
    });

    dispatch(add_test(data));
  }

  function addAnswers(el) {
    setArray((prevArray) => [
      ...prevArray.map((e) =>
        e.question_id === el
          ? {
              ...e,
              choises: [
                ...e.choises,
                {
                  choise_id:
                    prevArray[el].choises[prevArray[el].choises.length - 1]
                      .choise_id + 1,
                  isCorect: false,
                },
              ],
            }
          : e
      ),
    ]);
  }

  function nextQuestion(n) {
    return {
      question_id: n,
      choises: [
        {
          choise_id: 0,
          isCorect: false,
        },
        {
          choise_id: 1,
          isCorect: false,
        },
      ],
    };
  }

  function addNewQuestion() {
    setArray((prevArray) => [...prevArray, nextQuestion(prevArray.length)]);
  }
  if (test_status.status === "idle") {
    return (
      <div className="content_container">
        <div className="content__">
          <div className="title_container">
            <p>Создать тест</p>
          </div>
          <div className="test-name_container">
            <input
              type="text"
              name="quiz-quiz_name"
              class="text-input"
              placeholder="Название теста"
            />
          </div>
          <div className="checkbox">
            <input
              id="is_public"
              name="quiz-is_public"
              type="checkbox"
              className="inp"
            />
            <label className="labelforcheckbox" for="is_public">
              Открьітьій тест?
            </label>
          </div>
          <form name="quiz" className="questions_global_container">
            {array.map((elQ) => {
              console.log(elQ);
              return (
                <QuestionComponent
                  choices={elQ.choises}
                  addAnswers={addAnswers}
                  question_id={elQ.question_id}
                />
              );
            })}
          </form>
          <div className="add-question-button_container">
            <div
              onClick={addNewQuestion}
              className="add-question-button add-button button"
            >
              <div className="add-img">
                <div></div>
              </div>
              <p>Добавить вопрос</p>
            </div>
          </div>

          <div className="create-button_container">
            <div onClick={saveQuizName} className="create-button button">
              <p>Создать</p>
            </div>
          </div>
        </div>
      </div>
    );
    ///Обработка ошибок 404
  } else if (test_status.status === 404) {
    return <p>ERRRROR</p>;
    ///Екран Успешного добавления теста
  } else if (test_status.status === 200) {
    function copy() {
      var msg = test_status.action.quiz_id;;
      var temp = document.createElement("textarea");
      var tempMsg = document.createTextNode(msg);
      temp.appendChild(tempMsg);
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
    }
    return (
      <div id="quiz_id">
        <p>Ід вашего теста: {test_status.action.quiz_id}</p>
        <button onClick={copy}>Copy</button>
      </div>
    );
  }
}
