import React, { useState } from "react";

export const AddQuizScreen: React.FunctionComponent = () => {
  const [text, setText] = useState<string>('');
  const [questionList, setQuestionList] = useState<number[]>([]);
  const [question, setQuestion] = useState<object>({});

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">textsms</i>
              <input type="text" id="autocomplete-input" className="autocomplete"/>
                <label>Autocomplete</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
