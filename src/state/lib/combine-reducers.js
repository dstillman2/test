export default function combineReducers(reducers) {
  return function (state, action) {
    let nextState = state;

    for (let i = 0; i < reducers.length; i++) {
      nextState = reducers[i](nextState, action);
    }

    return nextState;
  }
}