import React from "react";
import Loader from "./Loader";
import PropTypes from "prop-types"; // ES6
import "./styles/style.css";

function ListQuiz({ state, handleSelect, selectedQuestion }) {
  console.log('ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:', state)
  if (state.length) {
    return (
      <div className="leftbar">
        <div className="quizlist">
          {state &&
            state.map((item, index) => {
              return (
                <div className="quizlist_item unvoted">
                  <a key={index}>
                    <span>{index + 1}</span>

                    <p
                      className="quizlist_item_name"
                      onClick={() => handleSelect(index)}
                    >
                      {item}
                    </p>

                    <div
                      className={`icon ${
                        selectedQuestion === index ? "voted" : ""
                      }`}
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

{
  /* <div>
<ul className="collection">
  {state.questions &&
    state.questions.map((item, index) => {
      return (
        <li
          key={index}
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
</div> */
}
