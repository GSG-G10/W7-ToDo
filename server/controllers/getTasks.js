const { getTasksQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  getTasksQuery(1)
    .then((results) => res.json(results.rows))
    .catch((err) => next(err));
};
