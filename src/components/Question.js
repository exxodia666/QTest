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
  ListItem
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
  const [checked, setChecked] = React.useState([0]);
  /////
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
        <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
          <FormGroup col> 
          {answers &&
            answers.map((answer) => (
              <FormControlLabel
                control={
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                }
                label={answer.text}
              />
            ))}
            </FormGroup> 
        </ListItem>
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
