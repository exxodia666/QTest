/* eslint-disable import/no-anonymous-default-export */
const { default: Axios } = require("axios");

export default () => {
  console.log("🚀REQUEST");
  return Axios.post(
    "http://134.249.181.40:7777/api/fe8ba3b8-2075-4272-aa61-036d34d4192c/answer/",
    {
      name: "Sanya",
      answers: [
        {
          question_id: "4daf1510-303c-4add-925a-7b37ba2b5a26",
          choices_id: ["8e117a35-d7e2-4c27-a618-8f35ba9449dc"],
        },
        {
          question_id: "c9837f23-7042-46ca-9534-a3e7cd826b6c",
          choices_id: ["2ff5cf19-5f38-431d-82ba-76197bc780a5"],
        },
      ],
    }
  )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
