const { addTaskQuery } = require('../database/queries');

module.exports = (req, res) => {
  console.log('in function')
  const { taskName, dueTime } = req.body;
  console.log(taskName, dueTime)
  addTaskQuery(taskName, dueTime)
    // eslint-disable-next-line no-unused-vars
    .then((result) => res.redirect('/home'))
    // eslint-disable-next-line no-unused-vars

    .catch((err) => console.log(err));


};




