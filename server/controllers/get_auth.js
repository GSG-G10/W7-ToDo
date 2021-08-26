const { comparePasswords } = require('../middlewares');
const { checkUsername, getPassword } = require('../database/queries');

const getAuthentication = (req, res, next) => {
  const { username, password } = req.body;

  checkUsername(username)
    .then((result) => {
      const testCase = result.rows[0].case;
      if (testCase === 'true') {
        getPassword(username).then((data) => data.rows[0].password)
          .then((dbPass) => {
            comparePasswords(password, dbPass).then((condition) => {
              if (condition) {
                console.log(condition);
                next();
              } else {
                res.redirect('/signin');
              }
            });
          });
      } else {
        res.redirect('/signin');
      }
    });
};
module.exports = getAuthentication;
