import {
  ADD_USER,
  ERROR,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../../actions/add_user";

const initialState = {
  user: {
    editing_key: "",
    id: "",
    name: "",
  },
  status: 200,
};
//eslint-disable-next-line
const add_user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action.payload.data.dude);
      return {
        user: { ...action.payload.data.dude },
        status: 200,
      };
    case LOGOUT_SUCCESS:
      return {
        user: {
          editing_key: "",
          id: "",
          name: "",
        },
        status: 200,
      };
    // case ERROR:
    //   return {
    //     user_name: action.payload.user_name,
    //   };
    default:
      return state;
  }
};
export default add_user;
