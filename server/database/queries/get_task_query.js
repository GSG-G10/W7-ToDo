const connection = require('../connection');

module.exports = (userId) => connection.query(
  `SELECT * FROM tasks WHERE user_id=${userId}`,
);
