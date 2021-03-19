// Only change code below this line
function sumFibonacci(num) {
  if (num < 0) {
    return 0;
  }
  if (num === 0) {
    return 1;
  } else {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0 && currNumber === num) {
        result = currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
    return result + sumFibonacci(num - 1);
  }
}
// Only change code above this line

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));

module.exports = sumFibonacci;
