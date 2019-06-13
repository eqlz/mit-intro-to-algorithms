class Stack {
  constructor(maxSize) {
    this.dataStore = [];

    this.maxSize = maxSize;
    this.top = 0;
  }

  push(element) {
    this.dataStore[this.top] = element;
    this.top = this.top + 1;
  }

  pop() {
    if (this.stackEmpty()) {
      throw "underFlow"
    } else {
      this.top = this.top - 1;
      return this.dataStore[this.top + 1];
    }
  }

  stackEmpty() {
    if (this.top === 0) {
      return true;
    } else {
      return false;
    }
  }
}

var randomRappers = new Stack(5) // having more than 5 rappers in a stack is crazy!
randomRappers.push('Frasier Crane');
randomRappers.push('Maximus');
randomRappers.push('Reyes');
randomRappers.push('Harold Shipman');
randomRappers.push('pony');

console.log(randomRappers);