const { verify } = require('jsonwebtoken');

const checkIsUser = (req, res, next) => {
  if (!req.cookies) return res.status(401).redirect('/signin');
  const { logged } = req.cookies;
  const secret = process.env.SECRET + req.body.username;
  if (!logged) return res.status(401).redirect('/signin');
  verify(logged, secret, (err, logged) => {
    next();
  });
};

module.exports = checkIsUser;
