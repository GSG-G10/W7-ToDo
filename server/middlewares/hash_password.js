const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {
  const salt = bcrypt.genSaltSync(10);
  bcrypt.hash(password, salt, callback);
};

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
};

module.exports = {
  comparePasswords,
  hashPassword,
};
