export const SEND_ANSWERS = "ANSWERS/SEND_ANSWERS";
// export const SHOW_RESULTS = "RESULT/SHOW_RESULTS";

export const sendAnswers = (payload) => {
  return {
    type: SEND_ANSWERS,
    payload,
  };
};

// export const showResult = (payload) => {
//   return {
//     type: SHOW_RESULTS,
//     payload,
//   };
// };
