import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col } from "react-bootstrap";
import { add_test, reset_add_test } from "../../redux/actions/add_test";

export default function Form({}) {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="file"
        value={selectedFile}
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
    </form>
  );
  ///Обработка ошибок 404
}
