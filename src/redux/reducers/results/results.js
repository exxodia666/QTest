import {
  LOAD_RESULTS_ERROR,
  LOAD_RESULTS_SUCCESS,
} from "../../actions/results";

const initialState = {
  status: null,
  results: [],
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RESULTS_SUCCESS:
      return {
        ...state,
      };
    case LOAD_RESULTS_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
