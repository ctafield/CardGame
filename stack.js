class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  
  getLength() {
    return this.count;
  }
  
  push(item) {
    this.items.push(item);
    this.count = this.count + 1;
  }
  
  pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }
    
    return this.items.pop();
  }
  
  peek() {
    return this.items.slice(-1)[0];
  }

  shuffle() {
    this.items = this.shuffleInt(this.items);
  }

  shuffleInt(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
}

module.exports = Stack;