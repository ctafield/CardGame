class PlayerModel {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }

  giveCard(card) {
    this.cards.push(card);
  }
}

module.exports = PlayerModel;