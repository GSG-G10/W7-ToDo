const homePage = require('./home');
const signIn = require('./signIn/signInPage');
const signUp = require('./signUp/signUpPage');
const getTasks = require('./get_tasks');
const { clientError, serverError } = require('./error');

module.exports = {
  homePage,
  signIn,
  signUp,
  getTasks,
  clientError, 
  serverError
};
