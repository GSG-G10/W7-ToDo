const { join } = require('path');

const signUp = (req, res) => {
  res.status(200);
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'sign-up.html'));
};

module.exports = signUp;
