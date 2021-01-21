import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { loadQuizList } from "../../redux/actions/load_quiz_list";
import { useHistory } from "react-router-dom";
import "./stylesforhomescreen/list.css";

function HomeScreen() {
  const dispatch = useDispatch();
  const quiz_list = useSelector((state) => state.quiz_list);
  const [input, setInput] = useState("");
  const history = useHistory();
  const [privat_input, setPrivat_input] = useState("");

  const user = useSelector((state) => state.user.loggedIn);
  if (!user) {
    history.push("/");
  }

  useEffect(() => {
    dispatch(loadQuizList());
  }, [dispatch]);

  const handleOnPres = (e) => {
    if (e.code === "Enter") {
      const id = e.target.value;
      let re = /^((\w){8})-((\w){4})-((\w){4})-((\w){4})-((\w){12})$/g;
      if (re.test(id)) {
        history.push(`/quiz/${e.target.value}`);
      }
    }
  };

  const handleOnClick = (e) => {
    let re = /^((\w){8})-((\w){4})-((\w){4})-((\w){4})-((\w){12})$/g;
    if (re.test(privat_input)) {
      history.push(`/quiz/${privat_input}`);
    }
  };

  if (quiz_list.status === 200) {
    return (
      <div className="content_container_home">
        <div className="content__home">
          <div className="title_container_home">
            <p>Список опросов</p>
          </div>
          <form>
            <div className="search_container">
              <div className="icon">
                <div></div>
              </div>
              <input
                id="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="text-input"
                placeholder="Поиск теста"
              />
            </div>
            <div class="private_container">
              <div className="icon">
                <div></div>
              </div>
              <input
                type="text"
                className="text-input"
                id="text_private"
                onKeyPress={handleOnPres}
                value={privat_input}
                onChange={(e) => setPrivat_input(e.target.value)}
                placeholder="Ввести ID приватного теста"
              />
              <div onClick={handleOnClick} class="private_search">
                <div></div>
              </div>
            </div>
          </form>

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
                <div className="quizbox_container" key={qz.id}>
                  <Link className="quizbox__" to={`/quiz/${qz.id}`}>
                    <div className="quiz-title">
                      <p>{qz.quiz_name}</p>
                    </div>
                    <div className="quiz-quantity">
                      <p>Кол-во вопросов: {qz.questions_count}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    );
  } else if (quiz_list.status === 404) {
    return <p>ERROR: {quiz_list.message}</p>;
  } else {
    return <Loader />;
  }
}
export default React.memo(HomeScreen);
