import { ADD_USER } from "../../actions/add_user";

const initialState = {
  user_name: "",
};
//eslint-disable-next-line
const add_user = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        user_name: action.payload.user_name,
      };
    default:
      return state;
  }
};
export default add_user;
