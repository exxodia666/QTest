export const SEND_IMAGE = "IMAGE/SEND_IMAGE";
export const SEND_IMAGE_ERROR = "IMAGE/SEND_IMAGE_ERROR";
export const SAVE_IMAGE = "IMAGE/SAVE_IMAGE";

export function save_image(payload) {
  return {
    type: SAVE_IMAGE,
    payload,
  };
}
export function send_image(payload) {
  return {
    type: SEND_IMAGE,
    payload,
  };
}
export function send_image_error(payload) {
  return {
    type: SEND_IMAGE_ERROR,
    payload,
  };
}
