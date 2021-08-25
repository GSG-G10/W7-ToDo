const getTasksQuery = require('./get_task_query');
const addTaskQuery = require('./add_tasks_query');
const deleteTaskQuery = require('./delete_task_query');

const addUserQuery = require('./add_user_query');

module.exports = {
  deleteTaskQuery,
  getTasksQuery,
  addTaskQuery,
  addUserQuery,
};
