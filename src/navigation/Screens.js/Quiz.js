import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ListQuiz from "../../components/ListQuiz";
import Loader from "../../components/Loader";
import Question from "../../components/Question";
//import { sendAnswers } from "../../redux/actions/send_answers";
import { clearQuiz, loadQuizzes } from "../../redux/actions/show_quizzes";

export default function Quiz() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);

  //ТУТ ГРУЗЯТСЯ ТЕСТЫ
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const history = useHistory();
  const found = state.questions.find((i) => i.isDone === false);

  useEffect(() => {
    dispatch(loadQuizzes(id));
    return () => {
      dispatch(clearQuiz());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (!found && state.status === 200) {
      history.push(`/results/${id}`);
    }
  }, [found, id, history, state.status]);

  const handleAnswer = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);
  };
  const handleSelect = (id) => {
    setSelectedQuestion(id);
  };

  if (state.status === 200) {
    return (
      <>
        {selectedAnswers && <p>{selectedAnswers.toString()}</p>}
        <Row>
          <Col sm={4}>
            <ListQuiz
              selectedAnswers={selectedAnswers}
              state={state}
              handleSelect={handleSelect}
              selectedQuestion={selectedQuestion}
            />
          </Col>
          <Col sm={8}>
            <Question
              isDone={state.questions[selectedQuestion].isDone}
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
  } else return <Loader />;
}
