import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useDispatch } from 'react-redux';
import { add_user } from "../../redux/actions/add_user.js";
import { useHistory } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent/Error.js";
import "./stylesforhomescreen/autorization.css";

export const UserScreen = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.loggedIn);

  const status = useSelector((state) => state.user.status);
  const message = useSelector((state) => state.user.message);

  if (user) {
    history.push("/home");
  }
  const [error, seterror] = React.useState("");

  const submit = () => {
    if (ref.current.value.length) {
      dispatch(add_user(ref.current.value));
      ref.current.value = "";
    } else {
      seterror("Enter name");
    }
  };

  const handleName = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };
  const handleClickName = (e) => {
    submit();
  };

  if (status === 400 && message.length) {
    return <ErrorComponent message={message} />;
  } else {
    return (
      <div className="content__auth">
        <div className="autorization_container">
          <div className="title_container">
            <p className="title">
              Для начала, пройдите нашу несложную авторизацию и получите доступ
              к лучшим ковченым тестам
            </p>
          </div>
          <div className="name-input_container">
            <input
              ref={ref}
              onKeyPress={handleName}
              id="icon_prefix"
              type="text"
              className="text-input"
              placeholder="Введите имя"
            />
          </div>
          {error && <ErrorComponent />}
          <div className="button_container">
            <input
              onClick={() => {
                handleClickName();
              }}
              type="button"
              className="button_vote button"
              value="Подтвердить"
            />
          </div>
        </div>
      </div>
    );
  }
};

