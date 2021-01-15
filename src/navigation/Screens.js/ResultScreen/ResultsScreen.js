import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import { sendAnswers } from "../../../redux/actions/send_answers";
import { clearQuiz } from "../../../redux/actions/show_quizzes";
import { useHistory } from "react-router-dom";
import "./Results.css";
import { delete_user } from "../../../redux/actions/add_user";

export default function ResultsScreen() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.results);
  const user = useSelector((state) => state.user.user.id);
  console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:", user);
  console.log(user);
  console.log("RESULTS SCREEN");

  const handleLogout = () => {
    console.log(user);
    if (user.user.editing_key.length) {
      console.log(user);
      dispatch(delete_user({ id: user.user.id, key: user.user.editing_key }));
      
    }
  };
  if (result.status === 200 || result.results.length) {
    return (
      <>
        <button onClick={handleLogout}>Logout</button>
        <div className="content_container">
          <div className="content__">
            <div className="title_container">
              <p>Результаты</p>
            </div>
            {result.results.map((i) => {
              return (
                <div className="quizbox_container">
                  <div className="quizbox">
                    <div className="quiz-info">
                      <div className="quiz-title">
                        <p>{i.quiz_name}</p>
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
