const homePage = require('./home');
const signIn = require('./signIn/signInPage');
const signUp = require('./signUp/signUpPage');
const deleteTask = require('./delete_task');
const { clientError, serverError } = require('./error');

module.exports = {
  homePage,
  signIn,
  signUp,
  deleteTask,
  clientError,
  serverError,
};
