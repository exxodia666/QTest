import React, { memo, useState } from "react";
import PropTypes from "prop-types"; // ES6
import { useDispatch } from "react-redux";
import { setDone, setSelected } from "../redux/actions/show_quizzes";
import "./styles/style.css";

const Question = ({
  isDone,
  id,
  text,
  wording,
  answers,
  imageUrl,
  multiple,
  overlay,
}) => {
  const dispatch = useDispatch();

  const [content, setContent] = useState('')

  const handleSelectItem = (e) => {
    dispatch(setSelected({ answ: e.target.value, id }));
  };
  return (
    <>
      <div className={`content ${content}`}>
        <div className="quiz_body">
          <div className="title_container">
            <p>{`Вопрос `}</p>
          </div>
          <div className="quizname">
            <p>{wording}</p>
          </div>
            {imageUrl && 
            <div className="image_container">
            <img width={550} src={imageUrl.picture} />
            </div>
            }
          <div className="description_container">
            <p>{text}</p>
          </div>
          <div className="checkbox_container">
            {answers.map((item) => {
              return (
                <div className="checkbox">
                  <input
                    disabled={isDone}
                    onChange={handleSelectItem}
                    checked={item.isSelected}
                    value={item.id}
                    id={item.id}
                    type="checkbox"
                  />
                  <label htmlFor={item.id}>                
                    <p>{item.text}</p>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="buttons_container">
            <input
              type="button"
              className="button_vote button"
              value="Ответить"
              disabled={isDone}
              onClick={() => {
                console.log('Xyi')
                dispatch(setDone(id));
              }}
            />
          </div>
        </div>
      </div>
      <div className="list-btn_container">
        <a
          className="list-btn"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementsByClassName("leftbar")[0]
              .classList.toggle("leftbar_active");
            document
              .getElementsByClassName("header__burger")[0]
              .classList.remove("active");
            document
              .getElementsByClassName("header__menu")[0]
              .classList.remove("active");
            setContent(content == "" ? "content_inactive" : "")

          }}
        >
          <p>Список</p>
          <div className="arrow">
            <div className="arrow_icon"></div>
          </div>
        </a>
      </div>
    </>
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