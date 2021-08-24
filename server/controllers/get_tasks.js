const { getTasksQuery } = require('../database/queries');

module.exports = (req, res, next) => {
  getTasksQuery(15)
    .then((results) => res.json(results.rows))
    .catch(next);
};
