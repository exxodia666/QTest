import React, { useState } from "react";


interface IChoices {
  text: string,
  is_correct: boolean
};

interface IQuestion {
  wording: string,
  isMultipleChoice: boolean,
  text: string,
  choices: IChoices[]

}

export const AddQuizScreen: React.FunctionComponent = () => {
  const [text, setText] = useState<string>('');
  const [questionList, setQuestionList] = useState<IQuestion[]>();
  const [question, setQuestion] = useState<IQuestion>();

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">textsms</i>
              <input type="text" id="autocomplete-input" className="autocomplete" />
              <label htmlFor='autocomplete-input'>Autocomplete</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
