export const ADD_TEST = "TEST/ADD_TEST";
export const ADD_TEST_SUCCESS = "TEST/ADD_TEST_SUCCESS";
export const ADD_TEST_ERROR = "TEST/ADD_TEST_ERROR";
export const RESET_TEST = "TEST/RESET_TEST";

export function add_test(test) {
  return {
    type: ADD_TEST,
    payload: test,
  };
}
export function add_test_success(payload) {
  return {
    type: ADD_TEST_SUCCESS,
    payload,
  };
}
export function add_test_error(payload) {
  return {
    type: ADD_TEST_ERROR,
    payload,
  };
}
export function reset_add_test() {
  return {
    type: RESET_TEST,
  };
}
