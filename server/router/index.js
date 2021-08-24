const router = require('express').Router();

const {
  checkIsUser,
  loginToken,
} = require('../middlewares');

const {
  homePage,
  signIn,
  signUp,
  deleteTask,
  getTasks,
  // getAuth,
  clientError,
  serverError,
} = require('../controllers');

router.get('/home', checkIsUser, homePage);
// router.get('/auth', getAuth, loginToken);
router.get('/auth', loginToken);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.get('/deleteTask/:id', deleteTask);
router.get('/getTasks', getTasks);
router.use(clientError);
router.use(serverError);

module.exports = router;
