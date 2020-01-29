const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
  constructor() {
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(questions) {
    var cards = [];
    questions.forEach(question => {
      var card = new Card(question.id, question.question, question.answers, question.correctAnswer)
      cards.push(card)
    })
    const deck = new Deck(cards)
    const round = new Round(deck)
    this.printMessage(deck, round)
    this.printQuestion(round)
    this.currentRound = round;
  }
}

module.exports = Game;
