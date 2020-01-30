const data = require('./data');
const prototypeQuestions = data.prototypeData;
const secondSet = data.secondSet;
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

  printMessageRound2(deck, round) {
      console.log(`Let's try another round! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round, game) {
      util.main(round, game);
  }

  start(questions, game, deckName) {
    //round1 - OG cards
    var cards = [];
    questions.forEach(question => {
      var card = new Card(question.id, question.question, question.answers, question.correctAnswer)
      cards.push(card)
    })
    const deck = new Deck(cards, deckName)
    const round = new Round(deck)
    this.currentRound = round;
    if (game.currentRound.deck.name === 'original') {
      this.printMessage(deck, round)
    } else {
      this.printMessageRound2(deck, round)
    }
    this.printQuestion(round, game)

    //round 2 - new dataset
  }



}

module.exports = Game;
