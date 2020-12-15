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
} from "@material-ui/core";
import { Button } from "bootstrap";

export default function Question({ title, text, wording, answers, imageUrl }) {
  const [input, setInput] = useState(null);
  console.log(input);
  ////
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  /////
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };
  ////

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  ////

  //   const handleRadioChange = (e) => {
  //     // console.log(e.target.value);
  //     setInput(e.target.value);
  //   };
  return (
    <Container>
      {imageUrl && (
        <Container>
          <Image width={300} height={300} src={imageUrl} roundedCircle />
        </Container>
      )}
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" error={error}>
          <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="The best!"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label="The worst."
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      </form>
      {/*
      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend">{wording}</FormLabel>
          <RadioGroup
            //aria-label="gender"
            //name="gender1"
            value={input}
            onChange={handleRadioChange}
          >
            {answers.map((answer) => (
              <FormControlLabel
                value={answer.id}
                control={<Radio />}
                label={answer.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
            </form>*/}
    </Container>
  );
}

Question.propTypes = {
  title: PropTypes.string,
  wording: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  answers: PropTypes.array,
};
