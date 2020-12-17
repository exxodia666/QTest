import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types"; // ES6
import { Container, Button } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import "../App.css";
import { useDispatch } from "react-redux";
import { setSelected } from "../redux/actions/show_quizzes";

const Question = ({
  isDone,
  id,
  text,
  wording,
  answers,
  imageUrl,
  setSelectedAnswers,
  multiple,
  selected,
}) => {
  const dispatch = useDispatch();
  //const [state, setstate] = useState(answers);
  // useEffect(() => {
  //   setstate(answers);
  //   return () => {
  //     setstate(answers);
  //   };
  // }, [id]);
  const handleSelectItem = (e) => {
    dispatch(setSelected({ answ: e.target.value, id }));
  };

  return (
    <Container>
      {/* {selected.map((i) => {
        return <p key={i.id}>{i.selected.toString() + ": " + i.id}</p>;
      })} */}

      {answers.map((item, index) => {
        return (
          <li key={item.id}>
            <Checkbox
              onChange={handleSelectItem}
              checked={item.isSelected}
              value={item.id}
              id={item.id}
            />
            <label>{item.text}</label>
            <label>{multiple.toString()}</label>
          </li>
        );
      })}
      <Button
        disabled={false}
        variant="primary"
        size="lg"
        block
        onClick={() => {
          console.log("LEL");
        }}
      >
        Ответить
      </Button>
    </Container>
  );
};
Question.propTypes = {
  id: PropTypes.string,
  wording: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  answers: PropTypes.array,
};
export default memo(Question);

/*
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
  }////
  const [value, setValue] = React.useState("");
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [checked, setChecked] = React.useState([]);
  /////
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleToggle = (e) => {
    setChecked(e.target.value);
  };*/
