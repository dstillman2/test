function logging(req, res, next) {
  if (process.env.isProduction) {
    next();
    return;
  }

  console.log('%s: %s [%s]', req.method, req.headers.referer, res.statusCode);

  next();
}

export default logging;