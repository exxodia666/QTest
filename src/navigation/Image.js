import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
function ImageComponent() {
  // определим изменяемый ref для объекта FileReader
  const fileRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log(event.target[0].files);
    //console.log(fileRef.current);
    const fetchData = async (uint8Array) => {
      console.log([...uint8Array]);
      const data = [
        { id: "7dtsa67das76agsg", img: [...uint8Array] },
        { id: "dasdasdasdasdasd", img: [...uint8Array] },
      ];
      try {
        const response = await axios({
          method: "post",
          url: "http://134.249.181.40:7777/api/",
          data: data,
          // не отправляем в JSON, размер изображения увеличится
        });
        setLoading(false);
        console.log(response);
      } catch (e) {
        console.error(e.message, "function handleSubmit");
      }
    };

    //if (!fileRef.current) return void null;

    const reader = new FileReader();
    const image = new Blob(event.target[0].files);
    console.log(image);
    reader.readAsArrayBuffer(image);
    reader.onloadend = (e) => {
      console.log(e.target.result);
      const uint8Array = new Uint8Array(e.target.result);
      console.log(uint8Array);
      setLoading(true);
      fetchData(uint8Array);
    };

    // рекомендованный метод
    //reader.readAsArrayBuffer();

    // метод reader.readAsBinaryString(fileRef.current[0])
    // согласно MDN,
    // уже был однажды удален из File API specification,
    // но после его вернули
    // в использование, но все же рекомендуют
    // использовать readAsArrayBuffer
    // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsBinaryString
  }, []);

  const nodeDom = (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="image" accept="image/*" type="file" id="button-file" />
      </div>
      <button type="submit">{loading ? "Сохраняю..." : "Сохранить"}</button>
    </form>
  );

  return nodeDom;
}

export default ImageComponent;
