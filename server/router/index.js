const router = require('express').Router();

const {
  homePage,
  signIn,
  signUp,
  deleteTask,
} = require('../controllers');

router.get('/home', homePage);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.get('/deleteTask/:id', deleteTask);

module.exports = router;
