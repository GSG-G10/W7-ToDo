const router = require('express').Router();

const {
  homePage,
  signIn,
  signUp,
} = require('../controllers');

router.get('/home', homePage);
router.get('/signin', signIn);
router.get('/signup', signUp);

module.exports = router;
