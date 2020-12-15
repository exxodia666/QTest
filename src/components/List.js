import ListGroup from "react-bootstrap/ListGroup";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadQuizzes } from "../redux/actions/show_quizzes";
import Loader from "./Loader";

function List() {
  //const [todos, setTodos] = useState(null);

  //ТУТ подключен редакс стор
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  //ТУТ ГРУЗЯТСЯ ТЕСТЫ
  useEffect(() => {
    dispatch(loadQuizzes("todos"));
  }, [dispatch]);

  console.log(state.questions);
  
  //НУЖНО ОТРЕНДЕРИТЬ state.questions
  if (state.questions.length) {
    return (
      <div>
        <ListGroup>
          {state.questions &&
            state.questions.map((todo, index) => {
              return (
                <ListGroup.Item action variant="light">
                  {index + 1} - {todo.question.wording}
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </div>
    );
  } else {
    return <Loader/>
  }
}

export default List;
