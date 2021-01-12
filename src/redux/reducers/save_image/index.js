import { SAVE_IMAGE, SEND_IMAGE_ERROR } from "../../actions/save_image";

const initialState = {
  status: "idle",
  imageUrl: [],
};
//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_IMAGE:
      console.log(action.payload);
      const newImageUrls = [...state.imageUrl];
      newImageUrls.push(action.payload);
      console.log(newImageUrls);
      const newState = {
        ...state,
        status: 200,
        imageUrl: newImageUrls,
      };
      return newState;
    case SEND_IMAGE_ERROR:
      return {
        status: 404,
        message: action.payload,
      };
    default:
      return state;
  }
};
