require('dotenv').config();

const { Pool } = require('pg');

const {
  DATABASE_URL,
  NODE_ENV,
  DEV_DB_URL,
  TEST_DB_URL,
} = process.env;

let dbUrl = '';
switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database URL!!!');
}

module.exports = new Pool(dbUrl, {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});
