import React from "react";
import Loader from "./Loader";
import PropTypes from "prop-types"; // ES6

function ListQuiz({ state, handleSelect, selectedQuestion }) {
  if (state().length) {
    return (
      <div>
        <ul className="collection">
          {state() &&
            state().map((item, index) => {
              return (
                <li
                  key={index}
                  //variant={}
                >
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelect(index)}
                    className={`collection-item ${
                      selectedQuestion === index ? "active" : ""
                    }`}
                  >
                    {index + 1} - {item}
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
  state: PropTypes.func,
  selectedQuestion: PropTypes.number,
};

export default React.memo(ListQuiz);
