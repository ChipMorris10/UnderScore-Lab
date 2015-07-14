// EXERCISE: Create an object that takes a series of numbers as an array and
// then find (and output) the average and the max. Use a function!

// returns the average of the array
var calculator = {
  average:
  function average (arr) {
    var output = 0;
      for (var i = 0; i < arr.length; i++) {
        output += arr[i];
  }
  return output / arr.length;
}
},

var outputAvg = calculator.average([1, 2, 3, 4, 5]);
console.log(outputAvg);



// returns the max of the array
// var calculator = {
  // max:
  function max (arr) {
    var output = 0;
    for (var i = 0; i < arr.length; i++) {
    if(arr)[i]<largestNum;
      output += arr[i];
    }

    return output;
  // }
};
console.log(max[1, 2, 3, 4, 5]);
