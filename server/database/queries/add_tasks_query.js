const connection = require('../connection');

module.exports = (taskName, dueTime) => connection.query(
  'INSERT INTO tasks (user_id,title, due_time) VALUES ($1,$2,$3)', [1, taskName, dueTime],
);
