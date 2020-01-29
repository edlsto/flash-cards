class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
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
    return (this.turns - this.incorrectGuesses.length) / this.turns * 100;
  }
}

module.exports = Round;
