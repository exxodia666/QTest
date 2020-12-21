import React from "react";
import Loader from "./Loader";
import PropTypes from "prop-types"; // ES6

function ListQuiz({ state, handleSelect, selectedQuestion }) {
  if (state.questions.length) {
    return (
      <div>
        <ul className="collection">
          {state.questions &&
            state.questions.map((item, index) => {
              return (
                <li
                  key={index}
                  action
                  //variant={}
                >
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelect(index)}
                    className={`collection-item ${
                      selectedQuestion === index ? "active" : ""
                    }`}
                  >
                    {index + 1} - {item.question.wording}
                  </p>
                </li>
              );
            })}
        </ul>
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
