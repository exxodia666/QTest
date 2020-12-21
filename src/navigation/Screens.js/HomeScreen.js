import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { loadQuizList } from "../../redux/actions/load_quiz_list";
//import { loadQuizzes } from "../../redux/actions/show_quizzes";
import PageNotFound from "../../components/PageNotFound";

export default function HomeScreen() {
  //ТУТ подключен редакс стор
  const dispatch = useDispatch();
  //QUIZ LIST STORE -->
  const quiz_list = useSelector((state) => state.quiz_list);

  //ЗАГРУЗКА ТЕСТОВ
  useEffect(() => {
    dispatch(loadQuizList());
  }, [dispatch]);

  // onClick={() => {
  //   dispatch(loadQuizzes(qz.id));
  // }}

  if (quiz_list.status === 200) {
    return (
      <ul class="collection">
        {quiz_list.data.quizzes.map((qz) => {
          return (
            <li class="collection-item" key={qz.id}>
              <Link
                style={{ color: "red", textDecoration: "inherit" }}
                to={`/quiz/${qz.id}`}
              >
                {qz.quiz_name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  } else if (quiz_list.status === 404) {
    <PageNotFound />;
  } else {
    return <Loader />;
  }
}
