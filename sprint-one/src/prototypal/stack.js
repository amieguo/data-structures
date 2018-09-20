var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.count = 0;
  newStack.storage = {};
  // extend(newStack, stackMethods);
  return newStack;
};

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

var stackMethods = {};
stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
}

stackMethods.pop = function() {
  this.count--;
  if (this.count < 0) {
    this.count = 0;
  }
  return this.storage[this.count+1];
}

stackMethods.size = function() {
  return this.count;
}

var stack = Stack();
stack.push('a');
stack.push('b');
console.log