const { addUserQuery } = require('../database/queries');
const { hashPassword } = require('../middlewares');

module.exports = (req, res, next) => {
  const { username, email, password } = req.body;
  hashPassword(password[0])
    .then((result) => addUserQuery(username, email, result))
    .then((result) => res.redirect('/signin'))
    .catch((err) => next(err));
};
