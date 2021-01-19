import React from "react";
import Loader from "./Loader";
import PropTypes from "prop-types"; // ES6
import "./styles/style.css";

function ListQuiz({ state, handleSelect, selectedQuestion }) {
  if (state.length) {
    return (
      <div className="leftbar">
        <div className="quizlist">
          {state &&
            state.map((item, index) => {
              return (
                <div className={`quizlist_item ${
                  item.isDone ? "voted" : "unvoted"
                } ${
                  selectedQuestion === index ? "current" : ""
                }`}
                >
                  <a key={index}>
                    <span>{index + 1}</span>

                    <p
                      className="quizlist_item_name"
                      onClick={() => handleSelect(index)}
                    >
                      {item.wording}
                    </p>

                    <div
                      className={'icon'}
                    >
                      <div></div>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
        <div className="complete-btn_container">
          <a href="" className="complete-btn">
            <p>Завершить тест</p>
          </a>
        </div>
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

