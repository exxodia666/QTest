import { SHOW_RESULTS } from "../../actions/send_answers";

const initialState = {
  status: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_RESULTS:
      return { ...action.payload };
    default:
      return state;
  }
};
