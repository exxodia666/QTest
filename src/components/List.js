import ListGroup from "react-bootstrap/ListGroup";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loadQuizzes } from "../redux/actions/show_quizzes";

function List() {
  //const [todos, setTodos] = useState(null);

  //ТУТ подключен редакс стор
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  //ТУТ ГРУЗЯТСЯ ТЕСТЫ
  useEffect(() => {
    dispatch(loadQuizzes("todos"));
  }, [dispatch]);

  console.log(state);
  /*
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    setTodos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  */
  //НУЖНО ОТРЕНДЕРИТЬ state.questions
  if (state.questions.length) {
    return (
      <div>
        <ListGroup>
          {todos &&
            todos.map((todo, index) => {
              return (
                <ListGroup.Item action variant="light">
                  {index + 1} - {todo.title}
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </div>
    );
  } else {
    return <p>Loading!!!</p>;
  }
}

export default List;
