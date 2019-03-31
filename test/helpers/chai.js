const chai = require('chai');
const subset = require('chai-subset');

chai.use(subset);

module.exports = { expect: chai.expect };
