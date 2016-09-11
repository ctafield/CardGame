var CardModel = require('./Card.js');
var Stack = require('./Stack.js');

class Deck {
  constructor(name) {
    this.name = name;
    this.deck = new Stack();
  }

  initializeDeck() {
    // Red, Yellow, Blue, Green
    // 0 to 9
    // Skip
    // Reverse
    // Change
    // Take 2
    // Change + Take 4

    var suites = ['Red', 'Yellow', 'Blue', 'Green'];
    
    var numbersOne = ['0'];
    var numbersTwo = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var specials = ['Skip', 'Skip', 'Reverse', 'Reverse', 'Take2', 'Take2'];

    suites.forEach((suite) => {
      numbersOne.forEach((number) => {
        this.deck.push(new CardModel(suite, number));
      })
      numbersTwo.forEach((number) => {
        this.deck.push(new CardModel(suite, number));
      })
      numbersTwo.forEach((number) => {
        this.deck.push(new CardModel(suite, number));
      })
      specials.forEach((special) => {
        this.deck.push(new CardModel(suite, special));
      })
    })

    var suiteLesses = ['Wildcard','WildcardTakeFour',
                       'Wildcard','WildcardTakeFour',
                       'Wildcard','WildcardTakeFour',
                       'Wildcard','WildcardTakeFour'];
    suiteLesses.forEach((suiteLess) => {
      this.deck.push(new CardModel('', suiteLess));
    });

    this.deck.shuffle();
  }

  takeNextCard() {
    return this.deck.pop();
  }
}

module.exports = Deck;
