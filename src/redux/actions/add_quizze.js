export const ADD_NEW_QUIZ = "QUIZ/ADD_NEW_QUIZ"; 

export const addedQuiz = (data) => {
    return {
      type: ADD_NEW_QUIZ,
      payload: data,
    };
  };