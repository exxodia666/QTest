import {
  ADD_TEST,
  ADD_TEST_SUCCESS,
  ADD_TEST_ERROR,
} from "../../actions/add_test";

const initialState = {
  status: "HUI SASI",
};
//eslint-disable-next-line

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST_SUCCESS:
      //console.log(KEKWAS, action.payload);
      return {
        status: action.payload,
      };
    case ADD_TEST_ERROR:
      ///console.log(KEKERROR, action.payload);
      return {
        status: action.payload,
      };
    default:
      return state;
  }
};
