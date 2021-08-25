const { getTasksQuery } = require('../database/queries');

module.exports = (req, res) => {
  getTasksQuery(1)
    .then((results) => res.json(results.rows))
    .catch((err) => res.json(err));
};
