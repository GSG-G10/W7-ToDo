const { addUserQuery } = require('../database/queries');
const { hashPassword } = require('../middlewares');

module.exports = (req, res) => {
  const { username, email, password } = req.body;
  hashPassword(password[0])
    .then((result) => addUserQuery(username, email, result))
    .then((result) => res.redirect('/signin'))
    .catch((err) => console.log(err));
};
