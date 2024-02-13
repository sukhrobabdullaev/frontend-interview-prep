const arr = [1, 2, 3, 4, 5, 6];

arr.fill(0, 2, 4);
console.log(arr);

const nums = [15, 14, 13, 12, 11, 1, 10, 9, 8, -5, 7, 6, 5, 4, 3, 2, 1];

console.log(nums.lastIndexOf(1));
console.log(nums.sort((a, b) => a - b));

var friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];

console.log(
  friends.sort((a, b) => {
    if (a.age < b.age) {
      return -1;
    }
    if (a.age > b.age) {
      return 1;
    }
    return 0;
  })
);

let numbers2 = [7, 6, 5, 4, 3, 2, 1];
console.log(numbers2.includes(5));
