const { getTasksQuery } = require('../database/queries');

module.exports = (req, res) => {
  getTasksQuery(2)
    .then((results) => res.json(results.rows))
    .catch((err) => res.json(err));
};
