import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useDispatch } from 'react-redux';
import { add_user } from "../../redux/actions/add_user.js";
import { useHistory } from "react-router-dom";

export const UserScreen = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  
  console.log("RENDER USER");

  if (user.user_name.length) {
    history.push("/home");
  }
  
  const handleName = (e) => {
    if (e.key === "Enter") {
      dispatch(add_user({ user_name: ref.current.value }));
      ref.current.value = "";
    }
  };
  
  return (
    <div className="row p">
      <div className="input-field col s6">
        <input
          id="icon_prefix"
          type="text"
          onKeyPress={handleName}
          className="validate"
          ref={ref}
        />
        <label htmlFor="icon_prefix">Name</label>
      </div>
    </div>
  );
};
