const supertest = require('supertest');
const app = require('../../src/app');

const request = supertest(app);

module.exports = request;
