import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import Loader from "./Loader";
import PropTypes from "prop-types"; // ES6

function ListQuiz({ state, handleSelect, selectedQuestion }) {
  if (state.questions.length) {
    return (
      <div>
        <ListGroup>
          {state.questions &&
            state.questions.map((item, index) => {
              return (
                <ListGroup.Item
                  key={index}
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

ListQuiz.propTypes = {
  handleSelect: PropTypes.func,
  state: PropTypes.object,
  selectedQuestion: PropTypes.number,
};

export default ListQuiz;
