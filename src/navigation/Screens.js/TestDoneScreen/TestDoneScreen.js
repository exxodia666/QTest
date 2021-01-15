import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendAnswers } from "../../../redux/actions/send_answers";
import { clearQuiz } from "../../../redux/actions/show_quizzes";

export default function TestDoneScreen() {
  const state = useSelector((state) => state.quizzes);
  const user = useSelector((state) => state.user.user.id);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendAnswers({ obj: state.questions, id, user }));
    return () => dispatch(clearQuiz());
    // eslint-disable-next-line
  }, [dispatch, id]);
  
  return <div>You pass test!!</div>;
}
