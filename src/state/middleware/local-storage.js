function localStorageMiddleware(name) {
  return function (state) {
    if (! window.localStorage) return;

    let stringifiedState;

    try {
      stringifiedState = JSON.stringify(state);
    } catch (e) {
      console.error('::ERROR', e);
    }

    localStorage.setItem(name, stringifiedState);
  }
}

export default localStorageMiddleware;