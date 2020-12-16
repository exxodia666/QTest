import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import { Container, Image } from "react-bootstrap";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import "../App.css";

export default function Question({
  id,
  text,
  wording,
  answers,
  imageUrl,
  setSelectedAnswers,
  multiple,
}) {
  ////
  const [value, setValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("Choose wisely");
  /////
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  if (multiple) {
    return (
      <Container>
        {imageUrl && (
          <Image
            className="Img"
            width={300}
            height={300}
            src={imageUrl}
            roundedCircle
          />
        )}
        <FormGroup col>
          {answers && 
          answers.map((answer)=>{
            <FormControlLabel
            control={
              <Checkbox
                //checked={state.checkedB}
                //onChange={handleChange}
                name={answer.id.toString()}
                color="primary"
              />
            }
            label={answer.text}
          />
          })}
        </FormGroup>
      </Container>
    );
  } else {
    return (
      <Container>
        {imageUrl && (
          <Image
            className="Img"
            width={300}
            height={300}
            src={imageUrl}
            roundedCircle
          />
        )}
        <FormControl component="fieldset">
          <FormLabel component="legend">{wording}</FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            {answers &&
              answers.map((answer) => (
                <FormControlLabel
                  value={answer.id.toString()}
                  control={<Radio />}
                  label={answer.text}
                />
              ))}
          </RadioGroup>
        </FormControl>
        <button onClick={() => setSelectedAnswers({ [id]: Number(value) })}>
          Button
        </button>
      </Container>
    );
  }
}

Question.propTypes = {
  id: PropTypes.number,
  wording: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  answers: PropTypes.array,
};
