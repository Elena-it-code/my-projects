// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
  const average = 0;
  const length = array.length;
  if (array.length === 0){
    return 0;
  } 
  const sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, average)
    return sum/length;
}  

