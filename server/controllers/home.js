const { join } = require('path');

const homePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'home.html'));
};

module.exports = homePage;
