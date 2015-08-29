// average - returns the average value in a given array

var calculator = {
  average:
  function average (arr) {
    var output = 0;
      for (var i = 0; i < arr.length; i++) {
        output += arr[i];
  }
  return output / arr.length;
}
};

var outputAvg = calculator.average([4, 6, 1, 1]);
console.log(outputAvg);





// This is how I had it, Reyna had me rewrite it with the _.first code below
// var array = [1, 2, 3, 4, 5]
// function first (array) {
//   var uno = array.slice(0,1);
//   return uno;
//   // var number = array.slice(0);
//   // return array[0];
// }

_.add = function (num1, num2) {
  return num1 + num2;
};

// first - returns the first element in an array
// _.first([5, 4, 3, 2, 1]);
// => 5

var _ = {};

_.first = function (array) {
  var uno = array.slice(0,1);
  return uno;
};

// contains - returns true is a given value is present in an array
// _.contains([7,55,99], 99);
// => true

_.contains = function (array, number) {


  return true;
};

// max - returns the maximum value in an array
// var numbers = [10, 5, 100, 2, 1000];
// _.max(numbers);
// => 1000

_.max = function (array, number) {
  var biggest = 0;

};
