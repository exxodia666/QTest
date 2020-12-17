export const LOAD_QUIZ_LIST = "QUIZ/LOAD_QUIZ_LIST";
export const SHOW_QUIZ_LIST = "QUIZ/SHOW_QUIZ_LIST";

export const showQuizList = (payload) => {
  return {
    type: SHOW_QUIZ_LIST,
    payload,
  };
};

export const loadQuizList = () => {
  return {
    type: LOAD_QUIZ_LIST,
  };
};
