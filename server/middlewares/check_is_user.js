const { verify } = require('jsonwebtoken');

const checkIsUser = (req, res, next) => {
  if (!req.cookies) return res.status(401).redirect('/signin');
  const { logged } = req.cookies;
  if (!logged) return res.status(401).redirect('/signin');
  verify(logged, process.env.SECRET, (err, logged) => {
    if (err) return res.status(401).redirect('/signin');
    next();
  });
};

module.exports = checkIsUser;
