const router = require('express').Router();

const {
  homePage,
  signIn,
  signUp,
  getTasks,
} = require('../controllers');

router.get('/home', homePage);
router.get('/signin', signIn);
router.get('/signup', signUp);
router.get('/getTasks', getTasks);
module.exports = router;
