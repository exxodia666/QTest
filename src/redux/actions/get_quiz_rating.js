export const LOAD_QUIZ_RATING = "RESULT/LOAD_QUIZ_RATING";
export const LOAD_QUIZ_RATING_SUCCESS = "RESULT/LOAD_QUIZ_RATING_SUCCESS";
export const LOAD_QUIZ_RATING_ERROR = "RESULT/LOAD_QUIZ_RATING_ERROR";

export const loadQuizRating = (payload) => {
    return {
      type: LOAD_QUIZ_RATING,
      payload,
    };
  };

  export const loadQuizRatingSuccess = (payload) => {
    return {
      type: LOAD_QUIZ_RATING_SUCCESS,
      payload,
    };
  };

  export const loadQuizRatingError = (payload) => {
    //console.log(payload);
    return {
      type: LOAD_QUIZ_RATING_ERROR,
      payload,
    };
  };