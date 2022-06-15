// 1
function sequence(start = 0, step = 1) {
  var current;
  function enclosed() {
    if (current === undefined) {
      current = start;
      return start;
    }
    current += step;
    return current;
  }
  return enclosed;
}

// 2
function take(fn, count) {
  var envoked = 0;
  var result = [];
  while (envoked < count) {
    var current = fn();
    result.push(current);
    envoked++;
  }
  return result;
}

// 3
function map(fn, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var current = fn(array[i]);
    result.push(current);
  }
  return result;
}

// 4
function fmap(a, gen) {
  function enclosed() {
    var current = gen.apply(undefined, arguments);
    var result = a(current);
    return result;
  }
  return enclosed;
}

// 5
function partial() {
  var initialData = Array.prototype.slice.call(arguments);
  var initialFunction = initialData[0];
  var initialArguments = initialData.slice(1);
  function enclosed() {
    var innerFunctionArguments = Array.prototype.slice.call(arguments);
    var totalArguments = initialArguments.concat(innerFunctionArguments);
    var functionCallResult = initialFunction.apply(null, totalArguments);
    return functionCallResult;
  }
  return enclosed;
}

// 6
function partialAny() {
  var initialData = Array.prototype.slice.call(arguments);
  var initialFunction = initialData[0];
  var initialArguments = initialData.slice(1);
  function enclosed() {
    var innerArguments = Array.prototype.slice.call(arguments);
    var totalArguments = [];
    for (var i = 0; i < initialArguments.length; i++) {
      if (initialArguments[i] === undefined) {
        totalArguments.push(innerArguments.shift());
      } else {
        totalArguments.push(initialArguments[i]);
      }
    }
    var argumentsList = totalArguments.concat(innerArguments);
    return initialFunction.apply(null, argumentsList);
  }
  return enclosed;
}

// 7
function bind(fn, context) {
  return function () {
    return fn.apply(context, Array.prototype.slice.call(arguments));
  };
}

// 8
function pluck(objects, fieldName) {
  var result = [];
  for (var i = 0; i < objects.length; i++) {
    result.push(objects[i][fieldName]);
  }
  return result;
}

// 9
function filter(arr, fn) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// 10
function count(obj) {
  return Object.keys(obj).length;
}
