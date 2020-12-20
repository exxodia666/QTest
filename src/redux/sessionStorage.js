export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

//TODO
//SAVE USER NAME
//SAVE RESULTS FOR THIS NAME
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify({ results: state.results });
    //const serializedState = JSON.stringify({ });
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
