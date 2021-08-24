const { addTaskQuery } = require('../database/queries');

module.exports = (req, res) => {
  const { taskName, dueTime } = req.body;
  addTaskQuery(taskName, dueTime)
    .then((result) => res.redirect('/home'))
    .catch((err) => res.send(err.message));
};
