var PlayerModel = require('./PlayerModel');
var Deck = require('./Deck');
var Logic = require('.Logic');

class Game {
  constructor() {
    this.players = [];
    this.deck = new Deck();
    this.pile = []; // discarded cards
    this.logic = new Logic();
  }

  addPlayer(name) {
    if ( this.players.length >= 4 ) {
        return 'player quota full';
    }
    this.players.push(new PlayerModel(name));
    return 'player has joined. there are ' + this.players.length + ' players.';
  };

  startGame() {
    if ( this.players.length < 2) {
        return 'not enough players';
    }

    this.deck.initializeDeck();
    this.dealCards();

    return 'game started';
  }

  dealCards() {
    const initialCardCount = 8;
    this.players.forEach((player) => {
      for (var i = 0; i < initialCardCount; i++) {
        var card = this.deck.takeNextCard();
        player.giveCard(card);
      }
    });
  }

  endGame() {
    delete this.players;
    players = [];
    return 'game ended';
  }

  playCard(playerCard) {
    var topCard = this.deck.topCard();
    if (!this.logic.canPlayCard(playerCard, topCard)) {
      return false;
    }
    return true;
  }
}

module.exports = Game;