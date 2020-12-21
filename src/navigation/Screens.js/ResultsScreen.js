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
import Avatar from "@material-ui/core/Avatar";
import { Card, CardHeader, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { clearQuiz } from "../../redux/actions/show_quizzes";
import getQuizName from "../../utils/getQuizName";

export default function ResultsScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  const result = useSelector((state) => state.results);

  //  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    if (id) {
      dispatch(sendAnswers({ obj: state.questions, id }));
    }
    return () => dispatch(clearQuiz());
  }, [dispatch, id, state.questions]);

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

  console.log(result);

  //TODO EBOSH DESIGN SANYA BLYAT
  //NAHOI TEBE BATYA
  //MOJESH MNE SUCTION BAHNYT
  if (result.status === 200 || result.results.length) {
    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>{`${result.results[0].name}`}</h4>
        </li>
        {result.results.map((i) => {
          console.log(i);
          return (
            <>
              <li className="collection-item">
                {i.quiz_name}: {(i.rating * 100).toFixed(0)}
              </li>
            </>
          );
        })}
      </ul>
    );
  } else {
    return <Loader />;
  }
}
