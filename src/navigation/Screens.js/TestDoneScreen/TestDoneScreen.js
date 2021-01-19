import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadQuizRating } from "../../../redux/actions/get_quiz_rating";
import { sendAnswers } from "../../../redux/actions/send_answers";
import { clearQuiz } from "../../../redux/actions/show_quizzes";
import "../ResultScreen/Results.css";

export default function TestDoneScreen() {
  const state = useSelector((state) => state.quizzes);
  const user = useSelector((state) => state.user.user.id);
  const quiz_rating = useSelector((state) => state.quiz_rating.quiz_results);
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
    <div className="content_container">
      <div className="content___">
        <div className="title_container">
          <p>Посмотри на остальных лохоууу!</p>
        </div>
        {quiz_rating.map((el) => {
          return (
            <div className="quizbox_container">
              <div className="quizbox">
                <div className="quiz-info">
                <div className="quiz-title">
                <p>{el.dude.name}</p>
                <p>Дата складання: {new Date(el.pass_date).toLocaleDateString()}</p>
                </div>
                </div>
                <div className="quiz-result">
                {Math.round(el.rating*100)}/100
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div>
      { <ul>
        {quiz_rating &&
          quiz_rating.map((el) => {
            return <li>{el.rating}</li>;
          })}
      </ul> }
    </div> */
}
