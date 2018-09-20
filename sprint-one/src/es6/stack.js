class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  
  push(value) {
    this.count++;
    this.storage[this.count] = value;
  }

  pop() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    return this.storage[this.count +1];
  }

  size() {
    return this.count;
  }
}

var stack = new Stack();