const checkIsUser = require('./check_is_user');
const loginToken = require('./login_cookie');
const getAuth = require('./get_Auth');
const checkData = require('./check_signup_input');
const { comparePasswords, hashPassword } = require('./hash_password');

module.exports = {
  checkIsUser,
  loginToken,
  getAuth,
  checkData,
  hashPassword,
  comparePasswords,
};
