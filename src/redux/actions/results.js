export const ADD_RESULTS = "RESULT/ADD_RESULTS";

export const addResults = (payload) => {
  return {
    type: ADD_RESULTS,
    payload,
  };
};
