const { deleteTaskQuery } = require('../database/queries');
/* eslint-disable no-unused-vars */
module.exports = (req, res) => {
  const { id } = req.params;
  deleteTaskQuery(id)
    .then((result) => res.redirect('/home'))
    .catch((err) => res.redirect('/error'));
};
