import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_test, reset_add_test } from "../../redux/actions/add_test";
//import "./styles/create-test.css";

export default function AddQuizScreen() {
  const dispatch = useDispatch();
  const test_status = useSelector((state) => state.add_test);
  const [array, setArray] = useState([
    {
      question_id: 0,
      choises: [
        {
          choise_id: 0,
          isCorect: false,
        },
        {
          choise_id: 1,
          isCorect: false,
        },
      ],
    },
  ]);

  React.useEffect(() => {
    return () => {
      dispatch(reset_add_test());
    };
  }, [dispatch]);

  function saveQuizName() {
    let inputs = document.querySelectorAll("input");
    let data = {
      quiz_name: "",
      questions: [],
    };
    Array.from(inputs).forEach((el) => {
      let armel = el.name.split("-");
      switch (armel[0]) {
        case "quiz":
          data["quiz_name"] = el.value;
          break;
        case "question":
          if (data.questions[parseInt(armel[2])]) {
            data.questions[parseInt(armel[2])][armel[1]] =
              el.value !== "on" ? el.value : el.checked;
          } else {
            data.questions[parseInt(armel[2])] = {
              [armel[1]]: el.value !== "on" ? el.value : el.checked,
              choices: [],
            };
          }
          break;
        case "choice":
          if (
            data.questions[parseInt(armel[2])]["choices"][parseInt(armel[3])]
          ) {
            data.questions[parseInt(armel[2])]["choices"][parseInt(armel[3])][
              armel[1]
            ] = el.value !== "on" ? el.value : el.checked;
          } else {
            data.questions[parseInt(armel[2])]["choices"][
              parseInt(armel[3])
            ] = { [armel[1]]: el.value !== "on" ? el.value : el.checked };
          }
          break;
        default:
          break;
      }
    });
    console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:", data);
    dispatch(add_test(data));
  }
  function addAnswers(el) {
    setArray((prevArray) => [
      ...prevArray.map((e) =>
        e.question_id === el
          ? {
              ...e,
              choises: [
                ...e.choises,
                {
                  choise_id:
                    prevArray[el].choises[prevArray[el].choises.length - 1]
                      .choise_id + 1,
                  isCorect: false,
                },
              ],
            }
          : e
      ),
    ]);
  }
  function nextQuestion(n) {
    return {
      question_id: n,
      choises: [
        {
          choise_id: 0,
          isCorect: false,
        },
        {
          choise_id: 1,
          isCorect: false,
        },
      ],
    };
  }
  function addNewQuestion() {
    setArray((prevArray) => [...prevArray, nextQuestion(prevArray.length)]);
  }
  if (test_status.status === "idle") {
    return (
      <div className="content_container">
        <div className="content">
          <div className="title_container">
            <p>Создать тест</p>
          </div>
          <div className="test-name_container">
            <input
              type="text"
              className="text-input"
              name="quiz-name"
              placeholder="Название теста"
            />
          </div>
          <div className="create-test_form_container">
            <form className="create-test_form">
              <div className="question_container">
                {array.map((elQ) => {
                  return (
                    <>
                      <div className="question-title_container">
                        <p>Вопрос {elQ.question_id+1}</p>
                      </div>
                      <div className="question-name_container">
                        <input
                          type="text"
                          className="text-input"
                          placeholder="Название вопроса"
                          name={`question-wording-${elQ.question_id}`}
                        />
                      </div>
                      <div className="answers_container">
                        {elQ.choises.map((el) => {
                          console.log('ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:', el)
                          return (
                            <div className="answer_container">
                              <div className="checkbox_">
                              <label>
                                <input
                                  type="checkbox"
                                  name={`choice-is_correct-${elQ.question_id}-${el.choise_id}`}
                                  //className="inp"
                                />
                                </label>
                              </div>
                              <input
                                type="text"
                                className="text-input"
                                placeholder={`Ответ ${el.choise_id + 1}`}
                                name={`choice-text-${elQ.question_id}-${el.choise_id}`}
                              />
                            </div>
                          );
                        })}
                        <div className="add-answer-button_container">
                          <div
                            onClick={() => {
                              addAnswers(elQ.question_id);
                            }}
                            className="add-answer-button add-button button"
                          >
                            <div className="add-img">
                              <div></div>
                            </div>
                            <p>Добавить вопрос</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="add-question-button_container">
                <div
                  onClick={addNewQuestion}
                  className="add-question-button add-button button"
                >
                  <div className="add-img">
                    <div></div>
                  </div>
                  <p>Добавить вопрос</p>
                </div>
              </div>

              <div className="create-button_container">
                <div className="create-button button" onClick={saveQuizName}>
                  <p>Создать</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
    ///Обработка ошибок 404
  } else if (test_status.status === 404) {
    return <p>ERRRROR</p>;
    ///Екран Успешного добавления теста
  } else if (test_status.status === 200) {
    return <p>ADD_TEST_SUCCESS</p>;
  }
}

{
  //  <>
  //       <div
  //         style={{
  //           margin: "auto",
  //           width: "auto",
  //           textAlign: "center",
  //           color: "#e57373",
  //         }}
  //       >
  //         <h1>Создать тест</h1>
  //       </div>
  //       <div classNameName="row">
  //         <form classNameName="col s12" onSubmit={normalno}>
  //           <div classNameName="row">
  //             <div classNameName="input-field col s6">
  //               <input
  //                 id="icon_prefix2"
  //                 classNameName="materialize-textarea"
  //                 placeholder="Enter your Quiz name"
  //                 name="quiz-name"
  //               />
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  //       <div
  //         style={{
  //           margin: "auto",
  //           width: "auto",
  //           textAlign: "center",
  //           color: "#e57373",
  //         }}
  //       >
  //         <h2>Добавить вопрос</h2>
  //         <form id="quiz">
  //           {array.map((elQ) => {
  //             return (
  //               <div id={`question${elQ.question_id}`}>
  //                 <input
  //                   type="text"
  //                   name={`question-wording-${elQ.question_id}`}
  //                   placeholder="Название опроса"
  //                 />
  //                 <div id="list_answers">
  //                   {elQ.choises.map((el) => {
  //                     return (
  //                       <>
  //                         <input
  //                           type="text"
  //                           name={`choice-text-${elQ.question_id}-${el.choise_id}`}
  //                           placeholder="Название опроса"
  //                         />
                          // <label>
                          //   <input
                          //     type="checkbox_"
                          //     name={`choice-is_correct-${elQ.question_id}-${el.choise_id}`}
                          //   />
                          //   <span>this true?</span>
                          // </label>
  //                       </>
  //                     );
  //                   })}
  //                 </div>
  //                 <div>
  //                   <i
  //                     onClick={() => {
  //                       addAnswers(elQ.question_id);
  //                     }}
  //                     style={{ cursor: "pointer" }}
  //                     classNameName="medium material-icons"
  //                   >
  //                     add_circle_outline
  //                   </i>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </form>
  //         <hr />
  //         <div>
  //           <i
  //             onClick={addNewQuestion}
  //             style={{ cursor: "pointer" }}
  //             classNameName="medium material-icons"
  //           >
  //             fast_forward
  //           </i>
  //         </div>
  //         <button
  //           classNameName="btn waves-effect waves-light"
  //           type="submit"
  //           onClick={saveQuizName}
  //         >
  //           Создать тест
  //           <i classNameName="material-icons right">send</i>
  //         </button>
  //       </div>
  //     </> 
}





{/* <div className="content_container">
        <div className="content">
          <div className="title_container">
            <p>Создать тест</p>
          </div>
          <div className="test-name_container">
            <input
              type="text"
              className="text-input"
              name="quiz-name"
              placeholder="Название теста"
            />
          </div>
          <div className="create-test_form_container">
            <form className="create-test_form">
              <div className="question_container">
                {array.map((elQ) => {
                  return (
                    <>
                      <div className="question-title_container">
                        <p>Вопрос {elQ.question_id+1}</p>
                      </div>
                      <div className="question-name_container">
                        <input
                          type="text"
                          className="text-input"
                          placeholder="Название вопроса"
                          name={`question-wording-${elQ.question_id}`}
                        />
                      </div>
                      <div className="answers_container">
                        {elQ.choises.map((el) => {
                          return (
                            <div className="answer_container">
                              <div className="checkbox_">
                                <input
                                  type="checkbox"
                                  name={`choice-is_correct-${elQ.question_id}-${el.choise_id}`}
                                  className="inp"
                                />
                                <label></label>
                              </div>
                              <input
                                type="text"
                                className="text-input"
                                placeholder={`Ответ ${el.choise_id}`}
                                name={`choice-text-${elQ.question_id}-${el.choise_id}`}
                              />
                            </div>
                          );
                        })}
                        <div className="add-answer-button_container">
                          <div
                            onClick={() => {
                              addAnswers(elQ.question_id);
                            }}
                            className="add-answer-button add-button button"
                          >
                            <div className="add-img">
                              <div></div>
                            </div>
                            <p>Добавить вопрос</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="add-question-button_container">
                <div
                  onClick={addNewQuestion}
                  className="add-question-button add-button button"
                >
                  <div className="add-img">
                    <div></div>
                  </div>
                  <p>Добавить вопрос</p>
                </div>
              </div>

              <div className="create-button_container">
                <div className="create-button button" onClick={saveQuizName}>
                  <p>Создать</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}