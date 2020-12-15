import ListGroup from "react-bootstrap/ListGroup";
import React, { useEffect, useState } from "react";
import axios from "axios";

function List() {
  const [todos, setTodos] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    setTodos(response.data);
  };

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div>
      <ListGroup >
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
}

export default List;
