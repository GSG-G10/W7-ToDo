const bcrypt = require('bcryptjs');

const hashPassword = (password, callback) => {
  const salt = bcrypt.genSaltSync(10);
  bcrypt.hash(password, salt, callback);
};

module.exports = {
  hashPassword,
};
