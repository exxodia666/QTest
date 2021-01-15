import React from "react";

export default function Result({ pass_date, name, rating }) {
  return (
    <div className="quizbox_container">
      <div className="quizbox">
        <div className="quiz-info">
          <div className="quiz-title">
            <p>{name}</p>
            <p>Дата складання: {new Date(pass_date).toString()}</p>
          </div>
        </div>
        <div className="quiz-result">{rating}/100</div>
      </div>
    </div>
  );
}
