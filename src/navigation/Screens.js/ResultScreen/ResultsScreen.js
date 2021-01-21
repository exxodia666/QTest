import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import { useHistory } from "react-router-dom";
import "./Results.css";
//import { delete_user } from "../../../redux/actions/add_user";
import { loadResults } from "../../../redux/actions/results";
import Result from "../../../components/Result/Result";
import ErrorComponent from "../../../components/ErrorComponent/Error";

export default function ResultsScreen() {
  const dispatch = useDispatch();
  const history = useHistory();
  const results = useSelector((state) => state.results);
  const user = useSelector((state) => state.user);
  const userLogged = useSelector((state) => state.user.loggedIn);

  React.useEffect(() => {
    if (!userLogged) {
      history.push("/");
    }
  }, [userLogged]);

  // const handleLogout = () => {
  //   if (user.user.editing_key.length) {
  //     dispatch(delete_user({ id: user.user.id, key: user.user.editing_key }));
  //   }
  // };

  React.useEffect(() => {
    dispatch(loadResults(user.user.id));
  }, []);


  if (user.status === 400 && user.message.length) {
    return <ErrorComponent message={user.message} />;
  }

  if (results.status === 200 || results.results.length) {
    return (
      <>
        {/* <button onClick={handleLogout}>Logout</button> */}
        <div className="content_container_results">
          <div className="content___">
            <div className="title_container">
              <p>Результаты</p>
            </div>
            {(results.results.length &&
            results.results.map((i) => {
              return (
                <Result
                  pass_date={i.pass_date}
                  name={i.quiz.quiz_name}
                  rating={i.rating * 100}
                />
              );
            })) || <div className="title_container">Сначала пройдите любой тест</div>}
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
}

