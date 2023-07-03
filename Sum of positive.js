// 1 solution
function positiveSum(arr) {

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] >0)sum += arr[i]
  }    return sum
}

// 2 solution
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

// 3 solution
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      }
  }
  return sum;
}


//4 solution
function positiveSum(arr) {
  let sum = 0;
  for (i=0; i<arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i]
    }
  }
  return sum
}