import React, { useState } from "react";
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
  //const [req, setreq] = useState(false);
  //  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    if (id && state.questions.length) {
      dispatch(sendAnswers({ obj: state.questions, id }));
      history.push("/results");
    }
    return () => dispatch(clearQuiz());
  }, [dispatch, id]);

  //TODO QUIZ NAMES
  // const getName = async (id, rating) => {
  //   const name = await getQuizName(id);
  //   console.log(name.data.quiz.quiz_name);
  //   const newArray = [...resultArray];
  //   newArray.push({
  //     name: name.data.quiz.quiz_name,
  //     rating,
  //   });
  //   console.log(newArray);
  //   setResultArray([...newArray]);
  // };

  // useEffect(() => {
  //   console.log(result);
  //   result.results.forEach((i) => {
  //     getName(i.quiz_id, i.rating);
  //   });
  //   console.log(
  //     "🚀 ~ file: ResultsScreen.js ~ line 51 ~ useEffect ~ resultArray",
  //     resultArray
  //   );
  // }, [result.results]);

  if (result.status === 200 || result.results.length) {
    return (
      <ul className="collection with-header">
        <li className="collection-header" key={Math.random()}>
          <h4>{`${result.results[0].name}`}</h4>
        </li>
        {result.results.map((i) => {
          return (
            <li className="collection-item" key={i.id}>
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
