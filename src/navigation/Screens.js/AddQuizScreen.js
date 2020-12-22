import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Row, Col, Alert } from "react-bootstrap";

export default function AddQuizScreen() {
  const dispatch = useDispatch();
  const[newQuestion, setNewQuestion] = useState([]);

  function normalno(el) {
    el.preventDefault();
  }

  function saveQuizName() {
    //dispatch();
    setNewQuestion(prev=>[...prev ])
    console.log('ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:', newQuestion)
  }


  const [quiz_name, setQuiz_name] = useState("");

  return (
    <Container>
      <div className="row">
        <form className="col s12" onSubmit={normalno}>
          <div className="row">
            <div className="input-field col s6">
              <input id="icon_prefix2" onChange={(e)=>{setQuiz_name(e.target.value)}} valeu={quiz_name} className="materialize-textarea" placeholder="Enter your Quiz name"></input>
              <button class="btn waves-effect waves-light" type="submit" onClick={saveQuizName}>Погнали дальше
              <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
