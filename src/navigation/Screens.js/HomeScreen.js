import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { loadQuizList } from "../../redux/actions/load_quiz_list";
//import { loadQuizzes } from "../../redux/actions/show_quizzes";
import PageNotFound from "../../components/PageNotFound";
import { useHistory } from "react-router-dom";
function HomeScreen() {
  const dispatch = useDispatch();
  const quiz_list = useSelector((state) => state.quiz_list);
  const [input, setinput] = useState("");
  const history = useHistory();

  console.log("RENDER HOME SCREEN");

  useEffect(() => {
    console.log("LOAD QUIZZES DISPATCH");
    dispatch(loadQuizList());
  }, [dispatch]);

  const handleOnClick = (e) => {
    if (e.code === "Enter") {
      const id = e.target.value;
      let re = /^((\w){8})-((\w){4})-((\w){4})-((\w){4})-((\w){12})$/g;
      if (re.test(id)) {
        history.push(`/quiz/${e.target.value}`);
      }
    }
  };

  if (quiz_list.status === 200) {
    return (
      <ul className="collection">
        <div className="container">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="text"
                    type="text"
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                  />
                  <label htmlFor="text">Введите название теста</label>
                </div>

                <div className="input-field col s12">
                  <input
                    id="text_private"
                    type="text"
                    //value={input}
                    onKeyPress={handleOnClick}
                    //onChange={(e) => setinput(e.target.value)}
                  />
                  <label htmlFor="text_private">
                    Введите id приватного теста
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>

        {quiz_list.data.quizzes
          .filter((e) => {
            if (input.length) {
              return !e.quiz_name
                .toLowerCase()
                .indexOf(input.trim().toLowerCase(), 0);
            } else {
              return true;
            }
          })
          .map((qz) => {
            return (
              <li className="collection-item" key={qz.id}>
                <Link
                  style={{ color: "red", textDecoration: "inherit" }}
                  to={`/quiz/${qz.id}`}
                >
                  <p>{qz.quiz_name}</p> Количество вопросов:{" "}
                  {qz.questions_count}
                </Link>
              </li>
            );
          })}
      </ul>
    );
  } else if (quiz_list.status === 404) {
    return <p>ERROR: {quiz_list.message}</p>;
  } else {
    return <Loader />;
  }
}
export default React.memo(HomeScreen);
