import { ADD_RESULTS } from "../../actions/results";
const initialState = {
  status: null,
  results: [],
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESULTS:
      //console.log("ДЕБАГ РАКЕТА ЗАЛЕТАЄ 🚀", action.payload.data);
      const newArray = [...state.results];
      newArray.push(action.payload.data);
      const newobj = {
        status: action.payload.status,
        results: newArray,
      };
      //console.log(newobj);
      return newobj;

    default:
      return state;
  }
};
