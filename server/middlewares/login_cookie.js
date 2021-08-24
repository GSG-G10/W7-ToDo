const { sign } = require('jsonwebtoken');

const loginToken = (req, res) => {
  const cookie = sign({ role: 'user' }, process.env.SECRET);
  res.cookie('logged', cookie, { httpOnly: true, secure: true });
  res.redirect('/home');
};

module.exports = loginToken;
