export const SAVE_ANSWERS = "ANSWERS/SAVE_ANSWERS";

export const saveAnswers = (payload) => {
  return {
    type: SAVE_ANSWERS,
    payload,
  };
};
