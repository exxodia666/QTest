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
import { loadResults } from "../../../redux/actions/results";
import Result from "../../../components/Result/Result";

export default function ResultsScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const results = useSelector((state) => state.results);

  const user = useSelector((state) => state.user);

  const userLogged = useSelector((state) => state.user.loggedIn);

  console.log("RESULTS SCREEN");

  React.useEffect(() => {
    if (!userLogged) {
      history.push("/");
    }
  }, [userLogged]);

  const handleLogout = () => {
    if (user.user.editing_key.length) {
      dispatch(delete_user({ id: user.user.id, key: user.user.editing_key }));
    }
  };
  
  React.useEffect(() => {
    dispatch(loadResults(user.user.id));
  }, []);

  console.log(results);

  if (results.status === 200 || results.results.length) {
    return (
      <>
        <button onClick={handleLogout}>Logout</button>
        <div className="content_container">
          <div className="content__">
            <div className="title_container">
              <p>Результаты</p>
            </div>
            {results.results.map((i) => {
              console.log();
              return (
                <Result
                  pass_date={i.pass_date}
                  name={i.quiz.quiz_name}
                  rating={i.rating * 100}
                />
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
