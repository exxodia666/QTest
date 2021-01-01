import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Row, Col, Alert } from "react-bootstrap";

export default function AddQuizScreen() {
  const dispatch = useDispatch();
  const [newQuestion, setNewQuestion] = useState([]);
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
  const [quiz_name, setQuiz_name] = useState("");
  React.useEffect(() => {
    return () => {
      dispatch(reset_add_test());
    };
  }, [dispatch]);
  function normalno(el) {
    el.preventDefault();
  }
  console.log(test_status);
  function saveQuizName() {
    let inputs = document.querySelectorAll("form input");
    let data = {
      quiz_name: "",
      questions: [],
    };
    Array.from(inputs).forEach((el) => {
      let armel = el.name.split("-");
      switch (armel[0]) {
        case "quiz":
          data["quiz_name"] = el.value;
          break;
        case "question":
          if (data.questions[parseInt(armel[2])]) {
            data.questions[parseInt(armel[2])][armel[1]] =
              el.value !== "on" ? el.value : el.checked;
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
    //console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:", data);
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
          choise_id: 1,
          isCorect: false,
        },
        {
          choise_id: 2,
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
      <Container>
        <div
          style={{
            margin: "auto",
            width: "auto",
            textAlign: "center",
            color: "#e57373",
          }}
        >
          <h1>Создать тест</h1>
        </div>
        <div className="row">
          <form className="col s12" onSubmit={normalno}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="icon_prefix2"
                  onChange={(e) => {
                    setQuiz_name(e.target.value);
                  }}
                  value={quiz_name}
                  className="materialize-textarea"
                  placeholder="Enter your Quiz name"
                  name="quiz-name"
                />
              </div>
            </div>
          </form>
        </div>
        <div
          style={{
            margin: "auto",
            width: "auto",
            textAlign: "center",
            color: "#e57373",
          }}
        >
          <h2>Добавить вопрос</h2>
          <form id="quiz">
            {array.map((elQ) => {
              return (
                <div id={`question${elQ.question_id}`}>
                  <input
                    type="text"
                    name={`question-wording-${elQ.question_id}`}
                    placeholder="Название опроса"
                  />
                  <div id="list_answers">
                    {elQ.choises.map((el) => {
                      return (
                        <Col>
                          <input
                            type="text"
                            name={`choice-text-${elQ.question_id}-${el.choise_id}`}
                            placeholder="Название опроса"
                          />
                          <label>
                            <input
                              type="checkbox"
                              name={`choice-is_correct-${elQ.question_id}-${el.choise_id}`}
                            />
                            <span>this true?</span>
                          </label>
                        </Col>
                      );
                    })}
                  </div>
                  <div>
                    <i
                      onClick={() => {
                        addAnswers(elQ.question_id);
                      }}
                      style={{ cursor: "pointer" }}
                      className="medium material-icons"
                    >
                      add_circle_outline
                    </i>
                  </div>
                </div>
              );
            })}
          </form>
          <hr />
          <div>
            <i
              onClick={addNewQuestion}
              style={{ cursor: "pointer" }}
              className="medium material-icons"
            >
              fast_forward
            </i>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            onClick={saveQuizName}
          >
            Создать тест
            <i className="material-icons right">send</i>
          </button>
        </div>
      </Container>
    );
    ///Обработка ошибок 404
  } else if (test_status.status === 404) {
    return <p>ERRRROR</p>;
    ///Екран Успешного добавления теста
  } else if (test_status.status === 200) {
    return <p>ADD_TEST_SUCCESS</p>;
  }
}
