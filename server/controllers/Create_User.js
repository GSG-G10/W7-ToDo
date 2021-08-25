const { addUserQuery } = require('../database/queries');

module.exports = (req, res) => {
  const { username, email, password } = req.body;
  addUserQuery(username, email, password)
    .then((result) => res.redirect('/signin'))
    .catch((err) => res.send(err));
};
