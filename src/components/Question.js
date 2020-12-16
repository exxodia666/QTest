import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import { Container, Image, Button, Alert } from "react-bootstrap";
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
  const [checked, setChecked] = React.useState([]);
  /////
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleToggle = (e) => {
    setChecked(e.target.value);
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
        <Alert variant="info">
          <Alert.Heading>{wording}</Alert.Heading>
          <hr />
          <p>{text}</p>
        </Alert>
        <RadioGroup 
        value={value}
        onChange={handleToggle}
        aria-label="quiz"
        >
          {answers &&
            answers.map((answer) => (
              <FormControlLabel
                value={answer.id.toString()}
                control={<Checkbox />}
                label={answer.text}
              />
            ))}
        </RadioGroup>
        <Button
          variant="primary"
          size="lg"
          block
          onClick={() =>{
            console.log(checked);
          }}
        >
          Button
        </Button>
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
        <Alert variant="info">
          <Alert.Heading>{wording}</Alert.Heading>
          <hr />
          <p>{text}</p>
        </Alert>
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

        <Button
          variant="primary"
          size="lg"
          block
          onClick={() =>{
            console.log(value);
          }}
        >
          Button
        </Button>
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
