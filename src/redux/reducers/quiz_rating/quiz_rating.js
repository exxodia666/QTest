import { LOAD_QUIZ_RATING_ERROR, LOAD_QUIZ_RATING_SUCCESS } from "../../actions/get_quiz_rating";


const initialState = {
    status: null,
    quiz_results: [],
    message: "",
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case LOAD_QUIZ_RATING_SUCCESS:
        console.log("DONE", action.payload);
        return {
          
          ...state,
          quiz_results: [...action.payload.data.results],
          status: 200,
        };
      case LOAD_QUIZ_RATING_ERROR:
        console.log(action.payload);
        return {
          ...state,
          message: action.payload,
          status: 400,
        };
      default:
        return state;
    }
  };