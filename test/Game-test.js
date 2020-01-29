const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of the current round', function() {
    const game = new Game();
    let cards = [{
      id: 1,
      question: "What allows you to define a set of related information using key-value pairs?",
      answers: ["object", "array", "function"],
      correctAnswer: "object"
    }, {
      id: 2,
      question: "What is a comma-separated list of related values?",
      answers: ["array", "object", "function"],
      correctAnswer: "array"
    }]
    game.start(cards);
    expect(game.currentRound).to.deep.equal(new Round(new Deck(cards)))
  });
});
