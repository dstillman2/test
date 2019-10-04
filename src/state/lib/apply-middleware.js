function applyMiddleware(reducer, middleware) {
  return function (state, action) {
    const nextState = reducer(state, action);

    for (let i = 0; i < middleware.length; i++) {
      middleware[i](nextState);
    }

    return nextState;
  }
}

export default applyMiddleware;