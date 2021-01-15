import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useDispatch } from 'react-redux';
import { add_user } from "../../redux/actions/add_user.js";
import { useHistory } from "react-router-dom";
import ErrorComponent from "../../components/ErrorComponent/Error.js";

export const UserScreen = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.loggedIn);

  console.log("RENDER USER");

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

  console.log(status, message);
  if (status === 400 && message.length) {
    return <ErrorComponent message={message} />;
  } else {
    return (
      <div className="row p">
        <div className="input-field col s6">
          <input
            placeholder="Enter your name"
            style={{ border: "1px solid black" }}
            id="icon_prefix"
            type="text"
            onKeyPress={handleName}
            className="validate"
            ref={ref}
          />
          <label htmlFor="icon_prefix">Name</label>
          <button
            onClick={() => {
              handleClickName();
            }}
          >
            Log in
          </button>
          {error && <ErrorComponent message={error} />}
        </div>
      </div>
    );
  }
};
