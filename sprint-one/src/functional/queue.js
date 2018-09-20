var Queue = function() {
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var beg = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // count ++;
    storage[count] = value;
    count ++;
    return storage;
  };
  
  someInstance.dequeue = function() {
    var del = storage[beg];
    delete storage[beg];
    beg++;
    count --;
    if (count < 0) {
      count = 0;
    }
    return del;
  };
  
  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

var q = Queue();
q.enqueue('a');
q.enqueue('b');
console.log(q.dequeue());
console.log(q.enqueue('c'));
console.log(q); //to.equal('b');