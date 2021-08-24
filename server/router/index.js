const router = require('express').Router();

const {
  homePage,
  signIn,
  signUp,
<<<<<<< HEAD
  deleteTask,
=======
  clientError, 
  serverError,
>>>>>>> e7fbc0f09499154f5c8455472239334013f1e840
} = require('../controllers');

router.get('/home', homePage);
router.get('/signin', signIn);
router.get('/signup', signUp);
<<<<<<< HEAD
router.get('/deleteTask/:id', deleteTask);
=======
router.use(clientError);
router.use(serverError);

>>>>>>> e7fbc0f09499154f5c8455472239334013f1e840

module.exports = router;
