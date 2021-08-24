const router = require('express').Router();

const {
  homePage,
  signIn,
  signUp,
  deleteTask,
  getTasks,
  clientError,
  serverError,
} = require('../controllers');

router.get('/home', homePage);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.get('/deleteTask/:id', deleteTask);
router.get('/getTasks', getTasks);
router.use(clientError);
router.use(serverError);

module.exports = router;
