import React, { memo } from "react";
import PropTypes from "prop-types"; // ES6
import { Container, Button, Image, Row, Col, Alert } from "react-bootstrap";
import { Checkbox, List, ListItem } from "@material-ui/core";
import "../App.css";
import { useDispatch } from "react-redux";
import { setDone, setSelected } from "../redux/actions/show_quizzes";
//import ModalComponent from "./Modal";
//import { Modal } from "bootstrap";

const Question = ({
  isDone,
  id,
  text,
  wording,
  answers,
  imageUrl,
  multiple,
}) => {
  const dispatch = useDispatch();

  const handleSelectItem = (e) => {
    console.log("Clicked");
    dispatch(setSelected({ answ: e.target.value, id }));
  };

  //TODO RENDER IMAGE
  // RENDER TEXT
  return (
    <Container>
      {/* <Modal open={open} setOpen={toggleOpen} src={imageUrl} /> */}
      <Alert variant="light">
        <Row>
          <Col>
            <Alert.Heading>{wording}</Alert.Heading>
            {multiple && (
              <Alert variant="info">Можете выбрать несколько ваиантов!</Alert>
            )}
          </Col>
          {imageUrl && (
            <Col>
              <Image
                className="Img"
                width={350}
                //height={300}
                src={imageUrl}
                rounded
              />
            </Col>
          )}
        </Row>
        <hr />
        <p className="qtext">{text}</p>
      </Alert>
      <List>
        {answers.map((item) => {
          return (
            <ListItem key={item.id}>
              <p>
                <label>
                  <input
                    disabled={isDone}
                    onChange={handleSelectItem}
                    checked={item.isSelected}
                    value={item.id}
                    id={item.id}
                    //id="indeterminate-checkbox"
                    type="checkbox"
                    //onChange={handleSelectItem}
                  />
                  <span>{item.text}</span>
                </label>
              </p>
            </ListItem>
          );
        })}
      </List>
      <Button
        disabled={isDone}
        variant="primary"
        size="lg"
        block
        onClick={() => {
          dispatch(setDone(id));
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
