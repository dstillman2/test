function applyCorsHeaders(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

  if (req.method === 'OPTIONS') {
    return res.end();
  }

  next();
}

export default applyCorsHeaders;