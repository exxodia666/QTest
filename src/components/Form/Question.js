import Axios from 'axios';
import React, { useState } from 'react';
import Choice from './Choice';
import './global-slave.css';

export default function QuestionComponent({ addAnswers, question_id, choices, setArray }) {
	const [image, setImage] = useState(null);
	const [id, setId] = useState(null);
	const [key, setKey] = useState(null);

	function deleteImage() {
		return Axios({
			method: 'delete',
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
	const sendImages = (selectedFile) => {
		const formdata = new FormData();
		formdata.append('picture', selectedFile);
		return Axios({
			method: 'post',
			url: 'https://questimie.herokuapp.com/api/image',
			headers: {
				'Content-Type': 'multipart/form-data',
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
								sendImages(e.target.files[0]);
							}}
							type="file"
							name={`question-file-${question_id}`}
							id={`question-file-${question_id}`}
							className="input-file"
						/>
						<label htmlFor={`question-file-${question_id}`} className="btn-tertiary">
							<div></div>
							<span className="js-fileName">Загрузить картинку</span>
						</label>
					</div>
				</div>
			)}

			{image && (
				<div className="img_container">
					<div className="img-wrap">
						<img src={image} className="img" />
						<div onClick={deleteImage} className="del-img-btn">
							<div></div>
						</div>
					</div>
				</div>
			)}

			<div className="description_container">
				<textarea
					placeholder="Описание"
					rows="6"
					className="description"
					name={`question-text-${question_id}`}
				></textarea>
			</div>
			<input type="hidden" value={id} name={`question-image-${question_id}`} />
			<div className="answers_container">
				{choices.map((el) => {
					return <Choice question_id={question_id} choise_id={el.choise_id} />;
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

{
	/* <div id={`question${question_id}`}>
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
    </div> */
}
