import React from "react";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListQuiz from "../../components/ListQuiz";
import Loader from "../../components/Loader";
import Question from "../../components/Question";
import { sendAnswers } from "../../redux/actions/send_answers";
import { loadQuizzes } from "../../redux/actions/show_quizzes";
import Avatar from "@material-ui/core/Avatar";
import { Card, CardHeader, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function ResultsScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  const result = useSelector((state) => state.results);
  useEffect(() => dispatch(sendAnswers({ obj: state.questions, id })), []);

  if (result.status === 200) {
    console.log(result);
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={`${result.data.name}`}
              src="https://cdn.discordapp.com/attachments/709748357572198421/787351142039289856/photo_2020-12-08_19-10-34.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${result.data.name}`}
          subheader={`${result.data.rating}`}
        />
      </Card>
    );
  } else {
    return <Loader />;
  }
}
