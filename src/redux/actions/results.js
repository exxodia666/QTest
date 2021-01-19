export const LOAD_RESULTS = "RESULT/LOAD_RESULTS";
export const LOAD_RESULTS_SUCCESS = "RESULT/LOAD_RESULTS_SUCCESS";
export const LOAD_RESULTS_ERROR = "RESULT/LOAD_RESULTS_ERROR";
export const loadResults = (payload) => {
  return {
    type: LOAD_RESULTS,
    payload,
  };
};
export const loadResultsSuccess = (payload) => {
  return {
    type: LOAD_RESULTS_SUCCESS,
    payload,
  };
};
export const loadResultsError = (payload) => {
  return {
    type: LOAD_RESULTS_ERROR,
    payload,
  };
};
