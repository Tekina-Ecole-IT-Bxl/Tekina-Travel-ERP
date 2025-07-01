const request = require('supertest');
const express = require('express');
const routes  = require('../src/routes/index.js');

const app = express();
app.use('/api', routes);

describe('GET /api/ping', () => {
  it("responds with JSON { status: 'ok' }", () => {
    return request(app)
      .get('/api/ping')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        if (res.body.status !== 'ok') throw new Error('bad body');
      });
  });
});
