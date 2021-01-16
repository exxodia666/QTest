import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadQuizRating } from "../../../redux/actions/get_quiz_rating";
import { sendAnswers } from "../../../redux/actions/send_answers";
import { clearQuiz } from "../../../redux/actions/show_quizzes";

export default function TestDoneScreen() {
  const state = useSelector((state) => state.quizzes);
  const user = useSelector((state) => state.user.user.id);
  const quiz_rating = useSelector((state) => state.quiz_rating.quiz_results);
  console.log('ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:', quiz_rating)
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuizRating(id));
  }, []);

  useEffect(() => {
    console.log(user, id);
    dispatch(sendAnswers({ obj: state.questions, id, user }));
    return () => dispatch(clearQuiz());
    // eslint-disable-next-line
  }, [dispatch, id]);

  return (
    <div>
      { <ul>
        {quiz_rating &&
          quiz_rating.map((el) => {
            return <li>{el.rating}</li>;
          })}
      </ul> }
    </div>
  );
}
