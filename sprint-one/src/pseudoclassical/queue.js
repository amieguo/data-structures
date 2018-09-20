var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
  this.beg = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++
}

Queue.prototype.dequeue = function() {
  var del = this.storage[this.beg];
  delete this.storage[this.beg];
  this.beg++;
  return del;
}

Queue.prototype.size = function() {
  var size = this.count - this.beg;
  if (size < 0) {
    size = 0;
  }
  return size;
}


var QueueA = new Queue();


