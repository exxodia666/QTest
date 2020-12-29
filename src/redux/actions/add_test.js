export const ADD_TEST = "TEST/ADD_TEST";
export const ADD_TEST_SUCCESS = "TEST/ADD_TEST_SUCCESS";
export const ADD_TEST_ERROR = "TEST/ADD_TEST_ERROR";

export function add_test(test) {
  return {
    type: ADD_TEST,
    payload: test,
  };
}

export function add_test_success() {
  return {
    type: ADD_TEST_SUCCESS,
  };
}

export function add_test_error() {
  return {
    type: ADD_TEST_ERROR,
  };
}
