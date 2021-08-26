const router = require('express').Router();

const {
  checkIsUser,
  loginToken,
  checkData,
} = require('../middlewares');

const {
  homePage,
  signIn,
  signUp,
  createUser,
  deleteTask,
  getTasks,
  getAuthentication,
  clientError,
  serverError,
  addTask,
  signOut,
} = require('../controllers');

router.get('/signin', signIn);
router.post('/auth', getAuthentication, loginToken);
router.get('/home', checkIsUser, homePage);
router.get('/signup', signUp);
router.post('/addUser', checkData, createUser);

router.post('/addTask', addTask);
router.get('/deleteTask/:id', deleteTask);
router.get('/getTasks', getTasks);

router.get('/logout', signOut);

router.use(clientError);
router.use(serverError);

module.exports = router;
