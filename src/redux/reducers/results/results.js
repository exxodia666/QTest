import {
  LOAD_RESULTS_ERROR,
  LOAD_RESULTS_SUCCESS,
} from "../../actions/results";

const initialState = {
  status: null,
  results: [],
  message: "",
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESULTS_SUCCESS:
      return {
        ...state,
        results: [...action.payload.data.dude.results],
        status: 200,
      };
    case LOAD_RESULTS_ERROR:
      return {
        ...state,
        message: action.payload.message,
        status: 400,
      };
    default:
      return state;
  }
};
