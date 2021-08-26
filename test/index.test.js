const request = require('supertest');

const connection = require('../server/database/connection');

const app = require('../server/app');
const { addUserQuery } = require('../server/database/queries');

// eslint-disable-next-line no-undef
test('test 200 status /', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});

// eslint-disable-next-line no-undef
test('test  /404 route', (done) => {
  request(app)
    .get('/error')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
// eslint-disable-next-line no-undef
test('Test post Data', () => addUserQuery('umarSalah', 'umars.salah@gmail.com', 'AaBbCc123')
  .then((res) => {
    // eslint-disable-next-line no-undef
    expect(res.rowCount).toBe(1);
  }));
