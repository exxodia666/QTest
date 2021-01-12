import Axios from "axios";
import React, { useState } from "react";
import Choice from "./Choice";

export default function QuestionComponent({
  addAnswers,
  question_id,
  choices,
}) {
  function deleteImage() {
    return Axios({
      method: "delete",
      url: `http://134.249.181.40:7777/api/image/${id}`,
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

  const sendImages = (selectedFile) => {
    const formdata = new FormData();
    formdata.append("picture", selectedFile);
    return Axios({
      method: "post",
      url: "http://134.249.181.40:7777/api/image",
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

  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);
  const [key, setKey] = useState(null);
  return (
    <div id={`question${question_id}`}>
      {image && <img src={"http://134.249.181.40:7777" + image} />}
      <input
        type="text"
        name={`question-wording-${question_id}`}
        placeholder="Название опроса"
      />
      <input
        disabled={true}
        type="hidden"
        value={id}
        name={`question-image-${question_id}`}
      />
      <input
        type="file"
        //value={selectedFile}
        onChange={(e) => {
          //console.log(e.target);
          sendImages(e.target.files[0]);
        }}
      />
      <input
        //accept="image/*"
        type="button"
        value="delete"
        onClick={deleteImage}
      />
      <div id="list_answers">
        {choices.map((el) => {
          console.log(el);
          return <Choice question_id={question_id} choise_id={el.choise_id} />;
        })}
      </div>
      <div>
        <i
          onClick={() => {
            addAnswers(question_id);
          }}
          style={{ cursor: "pointer" }}
          className="medium material-icons"
        >
          add_circle_outline
        </i>
      </div>
    </div>
  );
}
