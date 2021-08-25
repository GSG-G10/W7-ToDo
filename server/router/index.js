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
  // getAuth,
  clientError,
  serverError,
  addTask,
} = require('../controllers');

router.get('/home', checkIsUser, homePage);
// router.get('/auth', getAuth, loginToken);
router.get('/auth', loginToken);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.post('/addUser', checkData, createUser);

router.post('/addTask', addTask);
router.get('/deleteTask/:id', deleteTask);
router.get('/getTasks', getTasks);
router.use(clientError);
router.use(serverError);

module.exports = router;
