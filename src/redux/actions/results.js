export const ADD_RESULTS = "RESULT/ADD_RESULTS";

export const addResults = (payload) => {
  //console.log(payload);
  return {
    type: ADD_RESULTS,
    payload,
  };
};
