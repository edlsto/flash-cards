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

  start(questions, game, deckName) {
    var cards = [];
    questions.forEach(question => {
      if (question instanceof Card === false) {
        var card = new Card(question.id, question.question, question.answers, question.correctAnswer)
        cards.push(card)
      }
    })
    const deck = new Deck(cards, deckName)
    const round = new Round(deck)
    this.currentRound = round;
    if (this.currentRound.deck.name === 'original') {
      this.printMessage(deck)
    } else if (this.currentRound.deck.name && this.currentRound.deck.name.includes('review')) {
      this.printMessageReview()
    } else {
      this.printMessageRound2(deck)
    }
    this.printQuestion(round, game)
  }

  review(round) {
    var questionSet;
    if (round.deck.name === 'original') {
      questionSet = prototypeQuestions;
    } else {
      questionSet = secondSet;
    }
    const reviewQuestions = round.incorrectGuesses.map(guessId => {
      return questionSet.find(question => question.id === guessId)
    })
    var deckName = this.currentRound.deck.name + '-review'
    this.start(reviewQuestions, this, deckName)
  }
}

module.exports = Game;
