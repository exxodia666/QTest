import Axios from "axios";
import React, { useState } from "react";
import Choice from "./Choice";
import "./global-slave.css";

export default function QuestionComponent({
  addAnswers,
  question_id,
  choices,
  deleteQuestion,
  deleteAnswer,
}) {
  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);
  const [key, setKey] = useState(null);
  const [loader, setLoader] = useState(false);

  function deleteImage() {
    return Axios({
      method: "delete",
      url: `https://questimie.herokuapp.com/api/image/${id}`,
      data: {
        editing_key: key,
      },
    }).then((e) => {
      setImage(null);
      setId(null);
      setKey(null);
      console.log(e);
    });
  }

  function del() {
	deleteImage();
	setLoader(false);
  }

  const sendImages = (selectedFile) => {
    const formdata = new FormData();
    formdata.append("picture", selectedFile);
    return Axios({
      method: "post",
      url: "https://questimie.herokuapp.com/api/image",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formdata,
    })
      .then((e) => {
        setKey(e.data.editing_key);
        setImage(e.data.picture);
        setId(e.data.id);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="question_container">
      <div className="question-title_container">
        <p>Вопрос {question_id + 1}</p>
        <p
          className="krestik"
          onClick={() => {
            deleteQuestion(question_id, "question_id");
          }}
          id={`question-wording-${question_id}`}
        >
          ×
        </p>
      </div>
      <div className="question-name_container">
        <input
          type="text"
          className="text-input"
          placeholder="Название вопроса"
          name={`question-wording-${question_id}`}
        />
      </div>

      {!image && (
        <div className="add-image_container">
          <div className="form-group">
            <input
              onChange={(e) => {
                setLoader(true);
                console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:", loader);
                sendImages(e.target.files[0]);
              }}
              type="file"
              name={`question-file-${question_id}`}
              id={`question-file-${question_id}`}
              className="input-file"
            />
            <label
              htmlFor={`question-file-${question_id}`}
              className="btn-tertiary"
            >
              <div></div>
              <span className="js-fileName">Загрузить картинку</span>
            </label>
          </div>
        </div>
      )}

      {/* <div class="loading-img_container">
        <div class="loading-img">
          <div></div>
        </div>
      </div> */}

      {(image && (
        <div className="img_container">
          <div className="img-wrap">
            <img src={image} className="img" />
            <div
              onClick={del}
              className="del-img-btn"
            >
              <div></div>
            </div>
          </div>
        </div>
      )) ||
        (loader && (
          <div class="loading-img_container">
            <div class="loading-img">
              <div></div>
            </div>
          </div>
        ))}

      <div className="descr_container">
        <textarea
          placeholder="Описание"
          rows="6"
          className="descr"
          name={`question-text-${question_id}`}
        ></textarea>
      </div>
      <input type="hidden" value={id} name={`question-image-${question_id}`} />
      <div className="answers_container">
        {choices.map((el) => {
          return (
            <Choice
              question_id={question_id}
              choise_id={el.choise_id}
              deleteAnswer={deleteAnswer}
            />
          );
        })}
      </div>
      <div className="add-answer-button_container">
        <div
          onClick={() => {
            addAnswers(question_id);
          }}
          className="add-answer-button add-button button"
        >
          <div className="add-img">
            <div></div>
          </div>
          <p>Добавить ответ</p>
        </div>
      </div>
    </div>
  );
}
