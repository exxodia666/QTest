import React from "react";
import { Col } from "react-bootstrap";

function Choice({ question_id, choise_id }) {
  return (
    <Col>
      <input
        type="text"
        name={`choice-text-${question_id}-${choise_id}`}
        placeholder="Название опроса"
      />
      <label>
        <input
          type="checkbox"
          name={`choice-is_correct-${question_id}-${choise_id}`}
        />
        <span>this true?</span>
      </label>
    </Col>
  );
}

export default Choice;
