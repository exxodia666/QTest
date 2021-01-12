import React from "react";
import { useEffect } from "react";
//import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import ListQuiz from "../../components/ListQuiz";
import Loader from "../../../components/Loader/Loader";
//import Question from "../../components/Question";
import { sendAnswers } from "../../../redux/actions/send_answers";
//import { loadQuizzes } from "../../redux/actions/show_quizzes";
//import Avatar from "@material-ui/core/Avatar";
//import { Card, CardHeader, IconButton } from "@material-ui/core";
//import MoreVertIcon from "@material-ui/icons/MoreVert";
import { clearQuiz } from "../../../redux/actions/show_quizzes";
//import getQuizName from "../../utils/getQuizName";
import { useHistory } from "react-router-dom";
import "./Results.css";

export default function ResultsScreen() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  const result = useSelector((state) => state.results);
  const user = useSelector((state) => state.user.user_name);
  console.log('ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:', state)

  console.log("RESULTS SCREEN");

  useEffect(() => {
    if (id && state.questions.length) {
      dispatch(sendAnswers({ obj: state.questions, id, user }));
      history.push("/results");
    }
    return () => dispatch(clearQuiz());
    // eslint-disable-next-line
  }, [dispatch, id]);

  if (result.status === 200 || result.results.length) {
    return (
      <>
        <div className="content_container">
          <div className="content">
            <div className="title_container">
              <p>Результаты</p>
            </div>
            {result.results.map((i) => {
              return (
                <div className="quizbox_container">
                  <div className="quizbox">
                    <div className="quiz-info">
                      <div className="quiz-title">
                        <p>
                        {i.quiz_name}
                        </p>
                      </div>
                      <div className="quiz-quantity">
                      {/* {i.questions_count} вопросов */}
                      </div>
                    </div>
                    <div className="quiz-result">
                      {(i.rating * 100).toFixed(0)}/100
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
}

{
  /* <ul className="collection with-header">
        <li className="collection-header" key={Math.random()}>
          <h4>{`${result.results[0].name}`}</h4>
        </li>
        {result.results.map((i) => {
          return (
            <li className="collection-item" key={Math.random()}>
              {i.quiz_name}: {(i.rating * 100).toFixed(0)}
            </li>
          );
        })}
      </ul> */
}
