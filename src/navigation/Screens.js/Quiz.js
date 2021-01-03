import React, { memo, useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ListQuiz from "../../components/ListQuiz";
import Loader from "../../components/Loader";
import Question from "../../components/Question";
import { clearQuiz, loadQuizzes } from "../../redux/actions/show_quizzes";
import { Context } from "../MainNavigator";

export default memo(function Quiz() {

  const overlay =  useContext(Context)

  let { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const history = useHistory();
  const found = state.questions.find((i) => i.isDone === false);

  console.log("RENDER TEST SCREEN");

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
  const stateToQuestionName = () => state.questions.map((i) => i.question.wording);
  if (state.status === 200) {
    return (
      <>
            <ListQuiz
              selectedAnswers={selectedAnswers}
              state={stateToQuestionName()}
              handleSelect={handleSelect}
              selectedQuestion={selectedQuestion}
              
            />
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
              overlay={overlay}
            />
      </>
    );
  } else if (state.status === 404) {
    console.log(state);
    return <p>ERROR: {state.message}</p>;
  } else return <Loader />;
});
