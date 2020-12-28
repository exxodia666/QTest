import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Row, Col, Alert } from "react-bootstrap";

export default function AddQuizScreen() {
  const dispatch = useDispatch();
  const [newQuestion, setNewQuestion] = useState([]);

  function normalno(el) {
    el.preventDefault();
  }

  function saveQuizName() {
    //dispatch();
    setNewQuestion((prev) => [...prev]);
    console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:", newQuestion);
  }

  const [quiz_name, setQuiz_name] = useState("");

  function addAnswers(el) {
    let div = el.target.parentNode.parentNode.children.item(1);
    let inpNL = div.querySelectorAll("input");
    let inp = Array.from(inpNL);
    let choiceNum = inp[inp.length - 1].name.split("text");
    let Num = parseInt(choiceNum[1]) + 1;
    div.innerHTML += `
      <div>
      <input type="text" name="text${Num}" placeholder="Вариант ответа"/>
      </div>`;
  }

  function addNewQuestion() {
    let form = document.getElementById("quiz");
    console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:");

    form.innerHTML += `
    <div id="question1">
    <input type="text" name="wording" placeholder="Название опроса" />

    <div id="list_answers">
      <div>
        <input type="text" name="text1" placeholder="Вариант ответа" />
      </div>

      <div>
        <input type="text" name="text2" placeholder="Вариант ответа" />
      </div>
    </div>
    <div>
      <i
        onclick="addAnswers()"
        style= "cursor: pointer"
        class="medium material-icons"
      >
        add_circle_outline
      </i>
    </div>
  </div>
    `;
  }

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
                valeu={quiz_name}
                className="materialize-textarea"
                placeholder="Enter your Quiz name"
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
          <div id="question1">
            <input type="text" name="wording" placeholder="Название опроса" />

            <div id="list_answers">
              <div>
                <input type="text" name="text1" placeholder="Вариант ответа" />
              </div>

              <div>
                <input type="text" name="text2" placeholder="Вариант ответа" />
              </div>
            </div>
            <div>
              <i
                onClick={addAnswers}
                style={{ cursor: "pointer" }}
                class="medium material-icons"
              >
                add_circle_outline
              </i>
            </div>
          </div>
        </form>
        <hr />
        <div>
          <i
            onClick={addNewQuestion}
            style={{ cursor: "pointer" }}
            class="medium material-icons"
          >
            fast_forward
          </i>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          onClick={saveQuizName}
        >
          Создать тест
          <i class="material-icons right">send</i>
        </button>
      </div>
    </Container>
  );
}
