import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadQuizzes } from "../redux/actions/show_quizzes";

export default function QuizList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);

  useEffect(() => {
    dispatch(loadQuizzes("todos"));
  }, [dispatch]);

  if (state.questions.length) {
    return (
      <ul>
        {state.questions.map((item) => (
          <li key={item.question.id}>{item.question.wording}</li>
        ))}
      </ul>
    );
  } else {
    return (
      <div>
        <button onClick={() => dispatch(loadQuizzes())}>SAGA HUINYA</button>;
      </div>
    );
  }
}
