export const ADD_USER = "USER/ADD_USER";
export function add_user(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}
export const DELETE_USER = "USER/DELETE_USER";
export function delete_user(user) {
  return {
    type: DELETE_USER,
    payload: user,
  };
}
export const LOGIN_SUCCESS = "USER/LOGIN_SUCCESS";
export function login_success(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export const LOGOUT_SUCCESS = "USER/LOGOUT_SUCCESS";
export function logout_success(data) {
  return {
    type: LOGOUT_SUCCESS,
    payload: data,
  };
}
export const ERROR = "USER/ERROR";
export function req_error(error) {
  return {
    type: ERROR,
    payload: error,
  };
}
