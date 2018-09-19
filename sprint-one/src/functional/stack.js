var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count ++;
    storage[count] = value;
    return storage[count];
  };

  someInstance.pop = function() {
    count--;
    if (count < 0) {
      count = 0;
    }
    // delete storage[count];
    return storage[count+1];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

