export const SHOW_QUIZZES = "QUIZ/SHOW_QUIZZES";
export const LOAD_QUIZZES = "QUIZ/LOAD_QUIZZES";

export const showQuizzes = (payload) => {
  return {
    type: SHOW_QUIZZES,
    payload,
  };
};

export const loadQuizzes = (payload) => {
  return {
    type: LOAD_QUIZZES,
    payload,
  };
};
