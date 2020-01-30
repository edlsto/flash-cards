class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.deck.name = deck.name;
    this.startTime = new Date();
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    this.turns++;
    if (guess === this.deck[0].correctAnswer) {
      this.deck.shift();
      return 'correct!';
    } else {
      this.incorrectGuesses.push(this.deck[0].id)
      this.deck.shift();
      return 'incorrect!';
    }
  }

  calculatePercentCorrect() {
    return Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100);
  }

  endRound() {
    console.log(`**Round over** You answered ${this.calculatePercentCorrect()}% of the questions correctly. This round took you ${Math.round((new Date() - this.startTime) / 1000)} seconds to complete.`)
  }

}

module.exports = Round;
