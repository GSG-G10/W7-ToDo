const connection = require('../connection');

module.exports = (username) => connection.query(
  `SELECT CASE WHEN EXISTS
    (SELECT name FROM users WHERE name = '${username}')
    THEN 'true'
    ELSE 'false'
    END`,
);
