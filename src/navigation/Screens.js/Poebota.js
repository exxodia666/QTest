// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Container, Col } from "react-bootstrap";
// import { add_test, reset_add_test } from "../../redux/actions/add_test";
// import Form from "../../components/Form/Form";

// export default function AddQuizScreenKEKW() {
//   const dispatch = useDispatch();
//   const test_status = useSelector((state) => state.add_test);
//   console.log("ADD TEST SCREEN");
//   //const [array, setArray] = useState([]);
//   const [array, setArray] = useState([
//     {
//       question_id: 0,
//       choises: [
//         {
//           choise_id: 0,
//           isCorect: false,
//         },
//         {
//           choise_id: 1,
//           isCorect: false,
//         },
//       ],
//     },
//   ]);

//   React.useEffect(() => {
//     return () => {
//       dispatch(reset_add_test());
//     };
//   }, [dispatch]);

//   // function normalno(el) {
//   //   el.preventDefault();
//   // }

//   // function saveQuizName() {
//   //   const inputs = document.querySelectorAll("form input");
//   //   const reader = new FileReader();
//   //   const data = {
//   //     quiz_name: "",
//   //     questions: [],
//   //   };
//   //   Array.from(inputs).forEach((el) => {
//   //     let armel = el.name.split("-");
//   //     switch (armel[0]) {
//   //       case "quiz":
//   //         data["quiz_name"] = el.value;
//   //         break;
//   //       case "question":
//   //         if (data.questions[parseInt(armel[2])]) {
//   //           switch (el.type) {
//   //             case "checkbox":
//   //               data.questions[parseInt(armel[2])][armel[1]] = el.checked;
//   //               break;
//   //             case "text":
//   //               data.questions[parseInt(armel[2])][armel[1]] = el.value;
//   //               break;
//   //             case "file":
//   //               reader.readAsArrayBuffer(el.files[0]);
//   //               reader.onloadend = (e) => {
//   //                 const uint8Array = new Uint8Array(e.target.result);
//   //                 console.log(typeof uint8Array);
//   //                 data.questions[parseInt(armel[2])][armel[1]] = [
//   //                   ...uint8Array,
//   //                 ];
//   //               };
//   //               break;
//   //           }
//   //           //console.log(el);
//   //           //data.questions[parseInt(armel[2])][armel[1]] = pisat suda
//   //           // el.value === "on"
//   //           //   ? el.checked
//   //           //   : el.type !== "file"
//   //           //   ? el.checked
//   //           //   : true;
//   //           //el.value !== "on" ? el.value : el.checked;
//   //         } else {
//   //           data.questions[parseInt(armel[2])] = {
//   //             [armel[1]]: el.value !== "on" ? el.value : el.checked,
//   //             choices: [],
//   //           };
//   //         }
//   //         break;
//   //       case "choice":
//   //         if (
//   //           data.questions[parseInt(armel[2])]["choices"][parseInt(armel[3])]
//   //         ) {
//   //           data.questions[parseInt(armel[2])]["choices"][parseInt(armel[3])][
//   //             armel[1]
//   //           ] = el.value !== "on" ? el.value : el.checked;
//   //         } else {
//   //           data.questions[parseInt(armel[2])]["choices"][
//   //             parseInt(armel[3])
//   //           ] = { [armel[1]]: el.value !== "on" ? el.value : el.checked };
//   //         }
//   //         break;
//   //       default:
//   //         break;
//   //     }
//   //   });
//   //   console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:", data);
//   //   dispatch(add_test(data));
//   // }
//   // function addAnswers(el) {
//   //   setArray((prevArray) => [
//   //     ...prevArray.map((e) =>
//   //       e.question_id === el
//   //         ? {
//   //             ...e,
//   //             choises: [
//   //               ...e.choises,
//   //               {
//   //                 choise_id:
//   //                   prevArray[el].choises[prevArray[el].choises.length - 1]
//   //                     .choise_id + 1,
//   //                 isCorect: false,
//   //               },
//   //             ],
//   //           }
//   //         : e
//   //     ),
//   //   ]);
//   // }
//   function nextQuestion(n) {
//     return {
//       question_id: n,
//       choises: [
//         {
//           choise_id: 1,
//           isCorect: false,
//         },
//         {
//           choise_id: 2,
//           isCorect: false,
//         },
//       ],
//     };
//   }
//   function addNewQuestion() {
//     setArray((prevArray) => [...prevArray, nextQuestion(prevArray.length)]);
//   }

//   // function saveTest() {
//   //   const inputs = document.getElementById("quiz");
//   //   console.log(inputs);
//   //   dispatch(add_test(inputs));
//   // }
//   function setQuestion(id) {
//     setArray((prevArray) => [...prevArray, prevArray[id]);
//   }
//   if (test_status.status === "idle") {
//     return (
//       <Container>
//         {array.map((e, index) => (
//           <>
//             <Form question={e} setQuestion={() => setQuestion(index)} />
//           </>
//         ))}
//         <button onClick={addNewQuestion}>+</button>
//       </Container>
//     );
//     ///Обработка ошибок 404
//   } else if (test_status.status === 404) {
//     return <p>ERRRROR</p>;
//     ///Екран Успешного добавления теста
//   } else if (test_status.status === 200) {
//     return <p>ADD_TEST_SUCCESS</p>;
//   }
// }
