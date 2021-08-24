const homePage = require('./home');
const signIn = require('./signIn/signInPage');
const signUp = require('./signUp/signUpPage');
const addTask = require('./Addtask');

const { clientError, serverError } = require('./error');

module.exports = {
  homePage,
  signIn,
  signUp,
  clientError, 
  serverError,
  addTask,
};
