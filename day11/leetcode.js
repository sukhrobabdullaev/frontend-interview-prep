let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

while (k--) {
  nums.push(nums.pop());
}
console.log(nums);
