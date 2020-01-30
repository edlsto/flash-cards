class Deck {
  constructor(cards, name) {
    this.cards = cards;
    this.name = name;
  }

  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
