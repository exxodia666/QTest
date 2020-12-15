import ListGroup from "react-bootstrap/ListGroup";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadQuizzes } from "../redux/actions/show_quizzes";
import Loader from "./Loader";
//import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types"; // ES6

function List({ state, handleSelect, selectedQuestion }) {
  if (state.questions.length) {
    return (
      <div>
        <ListGroup>
          {state.questions &&
            state.questions.map((item, index) => {
              return (
                <ListGroup.Item
                  action
                  variant={selectedQuestion === index ? "dark" : "light"}
                  onClick={() => handleSelect(index)}
                >
                  {index + 1} - {item.question.wording}
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </div>
    );
  } else {
    return <Loader />;
  }
}

List.propTypes = {
  handleSelect: PropTypes.func,
  state: PropTypes.object,
  selectedQuestion: PropTypes.number,
};

export default List;
