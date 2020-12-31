import React from "react";
import { useEffect } from "react";
//import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//import ListQuiz from "../../components/ListQuiz";
import Loader from "../../components/Loader";
//import Question from "../../components/Question";
import { sendAnswers } from "../../redux/actions/send_answers";
//import { loadQuizzes } from "../../redux/actions/show_quizzes";
//import Avatar from "@material-ui/core/Avatar";
//import { Card, CardHeader, IconButton } from "@material-ui/core";
//import MoreVertIcon from "@material-ui/icons/MoreVert";
import { clearQuiz } from "../../redux/actions/show_quizzes";
//import getQuizName from "../../utils/getQuizName";
import { useHistory } from "react-router-dom";

export default function ResultsScreen() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  const result = useSelector((state) => state.results);
  const user = useSelector((state) => state.user.user_name);
  
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
      <ul className="collection with-header">
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
      </ul>
    );
  } else {
    return <Loader />;
  }
}
