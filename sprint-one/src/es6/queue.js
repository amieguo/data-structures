class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
    this.beg = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var del = this.storage[this.beg];
    delete this.storage[this.beg];
    this.beg++
    return del;
  }

  size() {
    var size = this.count - this.beg;
    if (size < 0) {
      size = 0
    }
    return size;
  }
}

var queue = new Queue();
console.log(queue);
console.log(queue.enqueue);