const { join } = require('path');

const signIn = (req, res) => {
  res.status(200);
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'sign-in.html'));
};

module.exports = signIn;
