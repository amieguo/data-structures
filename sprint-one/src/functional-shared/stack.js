var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.count = 0; 
  newStack.storage = {};
  
  extend(newStack, stackMethods);
  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};
stackMethods.push = function(value) {
  // var count = 0;
  this.count++;
  this.storage[this.count] = value;
  return this.storage[this.count];
};
stackMethods.pop = function() {
  this.count--;
  if (this.count < 0) {
    this.count = 0;
  }
  return this.storage[this.count+1];
};
stackMethods.size = function() {
  return this.count;
}

var stack1 = Stack();
stack1.push('a');
stack1.push('b');
console.log(stack1);