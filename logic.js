class CardModel {
  constructor() {
  }

  canPlayCard(playersCard, topCard) {
    if (playersCard.suite === '') {
      return true;
    }

    if (playersCard.suite === topCard.suite ||
        playersCard.value === topCard.value) {
      return true;
    }

    return true;
  }
}

module.exports = CardModel;