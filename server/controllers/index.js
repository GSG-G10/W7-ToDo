const homePage = require('./home');

const signIn = require('./signIn/signInPage');
const signUp = require('./signUp/signUpPage');

const createUser = require('./createUser');

const addTask = require('./Addtask');
const deleteTask = require('./deleteTask');
const getAuthentication = require('./get_auth');
const getTasks = require('./getTasks');
const signOut = require('./signOut');

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
  signOut,
  getAuthentication,
};
