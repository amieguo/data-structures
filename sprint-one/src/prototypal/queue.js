var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.count = 0;
  newQueue.storage = {};
  newQueue.beg = 0;
  // extend(newQueue, queueMethods);
  return newQueue;
};

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  var del = this.storage[this.beg];
  delete this.storage[this.beg];
  this.beg++;
  return del;
}

queueMethods.size = function() {
  var size = this.count - this.beg;
  if (size < 0) {
    size = 0;
  }
  return size;
}