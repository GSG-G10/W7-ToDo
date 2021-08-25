const homePage = require('./home');

const signIn = require('./signIn/signInPage');
const signUp = require('./signUp/signUpPage');

const createUser = require('./Create_User');

const addTask = require('./Addtask');
const deleteTask = require('./delete_task');
const getTasks = require('./get_tasks');

const { clientError, serverError } = require('./error');

module.exports = {
  homePage,
  signIn,
  signUp,
  deleteTask,
  clientError,
  serverError,
  getTasks,
  addTask,
  createUser,
};
