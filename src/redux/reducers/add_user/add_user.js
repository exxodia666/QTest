import {
  ADD_USER,
  ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../../actions/add_user";

const initialState = {
  loggedIn: false,
  user: {
    editing_key: "",
    id: "",
    name: "",
  },
  status: null,
  message: null,
};
//eslint-disable-next-line
const add_user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: { ...action.payload.data.dude },
        status: 200,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        user: {
          editing_key: "",
          id: "",
          name: "",
        },
        status: 200,
      };
    case ERROR:
      return {
        ...state,
        message: action.payload.message,
        status: 400,
      };
    default:
      return state;
  }
};
export default add_user;
