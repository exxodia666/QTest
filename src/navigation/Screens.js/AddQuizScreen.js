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

  function addAnswers() {
    let div = document.getElementById('list_answers')
    //div.preventDefault();
    let inpNL = div.querySelectorAll('input')
    let inp = Array.from(inpNL);
    let choiceNum = inp[inp.length-1].name.split('choice')
    let Num = parseInt(choiceNum[1])+1
    div.innerHTML += `
    <div>
    <input type="text" name="choice${Num}" placeholder="Вариант ответа"/>
    </div>`
  }

  function addNewQuestion() {
    
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
            <input type="text" name="question" placeholder="Название опроса" />

            <div id="list_answers">
              <div>
                <input
                  type="text"
                  name="choice1"
                  placeholder="Вариант ответа"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="choice2"
                  placeholder="Вариант ответа"
                />
              </div>
            </div>
            <div>
              <i onClick={addAnswers} style={{cursor:"pointer"}} class="medium material-icons">add_circle_outline</i>
              <i onClick={addNewQuestion} style={{cursor:"pointer"}} class="medium material-icons">fast_forward</i>
            </div>
          </div>
        </form>
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
