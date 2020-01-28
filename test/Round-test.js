const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');

describe('Round', function() {

  it.skip('should be a function', function() {
    const turn = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', function() {
    const turn = new Round();
    expect(turn).to.be.an.instanceof(Round);
  });

});
