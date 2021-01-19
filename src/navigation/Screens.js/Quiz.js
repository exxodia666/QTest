import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ListQuiz from "../../components/ListQuiz";
import Loader from "../../components/Loader";
import Question from "../../components/Question";
import { clearQuiz, loadQuizzes } from "../../redux/actions/show_quizzes";
import { Context } from "../MainNavigator";

export default memo(function Quiz() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const history = useHistory();
  const found = state.questions.find((i) => i.isDone === false);

  const user = useSelector((state) => state.user.loggedIn);
  if (!user) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(loadQuizzes(id));
    return () => {
      dispatch(clearQuiz());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (!found && state.status === 200) {
      history.push(`/done/${id}`);
    }
  }, [found, id, history, state.status]);

  const handleAnswer = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);
  };

  const handleSelect = (id) => {
    setSelectedQuestion(id);
  };

  const stateToQuestionName = () =>
    state.questions.map((i) => ({
      wording: i.question.wording,
      isDone: i.isDone,
    }));

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
        />
      </>
    );
  } else if (state.status === 404) {
    return <p>ERROR: {state.message}</p>;
  } else return <Loader />;
});
