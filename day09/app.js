function miniMaxSum(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  // 9007199254740991 - max of numbers
  // -9007199254740991 - min of numbers
  let sum = 0;

  for (let value of arr) {
    if (value > max) max = value;
    if (value < min) min = value;
    sum += value; // 1+2+3+4+5=15
  }
  console.log(max, min);
  console.log(sum - max, sum - min);
}

miniMaxSum([1, 2, 3, 4, 5]);

let s = "07:05:45PM";
console.log(new Date(s).toDateString());

console.log(Number(s.slice(0, 2)));
