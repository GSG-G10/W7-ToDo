const connection = require('../connection');

module.exports = (id) => connection.query(`DELETE FROM tasks WHERE title = '${id}'`);
