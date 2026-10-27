const request = require('supertest');
const app = require('./index');

test('home page works', async () => {
  const r = await request(app).get('/');
  expect(r.text).toBe('Hello CI/CD!');
});