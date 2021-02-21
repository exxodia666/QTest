import {
  LOAD_QUIZ_LIST_ERROR,
  SHOW_QUIZ_LIST,
} from "../../actions/load_quiz_list";

const initialState = { status: null, message: null };
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUIZ_LIST:
      return { ...state, ...action.payload };
    case LOAD_QUIZ_LIST_ERROR:
      return {
        status: action.payload.status,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
