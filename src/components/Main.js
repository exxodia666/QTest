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
  //console.log(state.questions[selectedQuestion].question.title);
  //const selected_question = state.questions.find(
  //  (element) => element.question.id === selectedQuestion
  //);

  const handleSelect = (id) => {
    console.log(id);
    setSelectedQuestion(id);
  };

  useEffect(() => {
    dispatch(loadQuizzes(7777));
  }, [dispatch]);

  //НУЖНО ОТРЕНДЕРИТЬ state.questions

  //todo choises
  if (state.questions.length) {
    console.log(state.questions[selectedQuestion].choices);
    return (
      <>
        <Header />
        <Row>
          <Col sm={4}>
            <List
              state={state}
              handleSelect={handleSelect}
              selectedQuestion={selectedQuestion}
            />
          </Col>
          <Col sm={8}>
            <Question
              imageUrl={state.questions[selectedQuestion].question.image}
              title={state.questions[selectedQuestion].question.title}
              wording={state.questions[selectedQuestion].question.wording}
              answers={state.questions[selectedQuestion].choices}
            />
          </Col>
        </Row>
      </>
    );
  } else {
    return <Loader />;
  }
}
