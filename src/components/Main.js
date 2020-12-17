import React, { useEffect } from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadQuizzes } from "../redux/actions/show_quizzes";
import Header from "./Header";
import List from "./List";
import Loader from "./Loader";
import Question from "./Question";

export default function Main() {
  //ТУТ подключен редакс стор
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  //ТУТ ГРУЗЯТСЯ ТЕСТЫ

  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  //console.log(state.questions);

  const handleAnswer = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);
  };

  const handleSelect = (id) => {
    setSelectedQuestion(id);
  };

  useEffect(() => {
    dispatch(loadQuizzes(7777));
  }, [dispatch]);

  //НУЖНО ОТРЕНДЕРИТЬ state.questions
  //console.log(state.questions[selectedQuestion].is_multiple_choice)
  //todo choises
  if (state.questions.length) {
    return (
      <>
        <Header />
        {selectedAnswers && <p>{selectedAnswers.toString()}</p>}
        <Row>
          <Col sm={4}>
            <List
              selectedAnswers={selectedAnswers}
              state={state}
              handleSelect={handleSelect}
              selectedQuestion={selectedQuestion}
            />
          </Col>
          <Col sm={8}>
            <Question
              setSelectedAnswers={handleAnswer}
              imageUrl={state.questions[selectedQuestion].question.image}
              id={state.questions[selectedQuestion].question.id}
              text={state.questions[selectedQuestion].question.text}
              wording={state.questions[selectedQuestion].question.wording}
              answers={state.questions[selectedQuestion].choices}
              multiple={
                state.questions[selectedQuestion].question.is_multiple_choice
              }
            />
          </Col>
        </Row>
      </>
    );
  } else {
    return <Loader />;
  }
}
