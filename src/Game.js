const data = require('./data');
const prototypeQuestions = data.prototypeData;
const secondSet = data.secondSet;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
  constructor(decks) {
    this.decks = decks;
    this.currentDeck = this.decks[0];
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printMessageRound2(deck) {
    console.log(`Let's try another round! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printMessageReview() {
    console.log(`Let's review the questions you got wrong!`)
  }

  printQuestion(round, game) {
    util.main(round, game);
  }

  start() {
    var cards = [];
    this.decks[0].forEach(question => {
      if (question instanceof Card === false) {
        var card = new Card(question.id, question.question, question.answers, question.correctAnswer)
        cards.push(card)
      }
    })
    const deck = new Deck(cards)
    const round = new Round(deck)
    this.currentRound = round;
    this.printMessage(deck)
    this.printQuestion(round)
    //wait until round over
    this.printMessageReview()
    round.review()
  }




}

module.exports = Game;
