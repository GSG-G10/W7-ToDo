const router = require('express').Router();

const {
  homePage,
  signIn,
  signUp,
  getTasks,
  clientError,
  serverError,
  addTask,
} = require('../controllers');

router.get('/home', homePage);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.post('/addTask', addTask);
router.get('/getTasks', getTasks);
router.use(clientError);
router.use(serverError);

module.exports = router;
