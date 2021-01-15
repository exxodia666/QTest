import React from "react";
import "./styles/loader.css";
import img from './styles/image.png'

function Loader() {
  return (
    <div>
      <div className="loader_container">
        <img className="rot" src={img} />
      </div>
    </div>
  );
}

export default React.memo(Loader);
