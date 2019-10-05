function applyMiddleware(middleware, { req, res }) {
  return new Promise((resolve, reject) => {
    let index = 0;

    function callNextMiddleware() {
      if (index > middleware.length - 1) {
        resolve();
      }

      middleware[index++](req, res, callNextMiddleware);
    }

    callNextMiddleware();
  });
}

export default applyMiddleware;