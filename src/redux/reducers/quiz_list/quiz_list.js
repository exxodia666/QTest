import { SHOW_QUIZ_LIST } from "../../actions/load_quiz_list";

const initialState = { status: null };
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_QUIZ_LIST:
     // console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
