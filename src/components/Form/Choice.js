import React from "react";
import "./global-slave.css";

function Choice({ question_id, choise_id, deleteAnswerOrQuestion }) {
  return (
    <div className="answer_container">
      <div className="checkbox">
        <input 
        name={`choice-is_correct-${question_id}-${choise_id}`}
        type="checkbox" id={`checkbox_${question_id}-${choise_id}`} className="inp" />
        <label for={`checkbox_${question_id}-${choise_id}`}></label>
      </div>
      <input 
      name={`choice-text-${question_id}-${choise_id}`}
      type="text" className="text-input" placeholder={`Ответ ${choise_id+1}`} />
      <button  id={`btn_${question_id}-${choise_id}`} onClick={()=>deleteAnswerOrQuestion(choise_id, 'choice_id')}>Delete</button>
    </div>
  );
}

export default Choice;

{
  /* <Col>
      <input
        type="text"
        name={`choice-text-${question_id}-${choise_id}`}
        placeholder="Название вопроса"
      />
      <label>
        <input
          type="checkbox"
          name={`choice-is_correct-${question_id}-${choise_id}`}
        />
        <span>this true?</span>
      </label>
    </Col> */
}
