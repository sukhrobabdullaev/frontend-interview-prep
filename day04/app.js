// finding most frequent item
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, 3];

let mf = 1, // max 1 repeatdly
  m = 0, // count
  item; // element

for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++; // [0]=[1]=[2]... m=1,2,3

    if (mf < m) {
      // 1<2,3,4
      mf = m; // 2
      item = arr1[i]; // 'a','a'
    }
  }
  m = 0;
}

// console.log(item + " (" + mf + " times)"); // 3 why?

//  Write a JavaScript program to find the sum of squares of a numerical vector.
function sum_sq(arr) {
  let sum = 0;
  let i = arr.length;

  while (i--) {
    sum += Math.pow(arr[i], 2);
  }

  return sum;
}

console.log(sum_sq(0, 1, 2, 3, 4));

function sum_sq2(array) {
  // Initialize a variable to store the sum of squares
  let sum = 0;

  // Iterate through the array in reverse order using forEach
  array.forEach((element) => {
    // Add the square of the current element to the sum
    sum += Math.pow(element, 2);
  });

  // Return the calculated sum of squares
  return sum;
}

console.log(sum_sq2([0, 1, 2, 3, 4]));

// compute the sum and product of an array of integers
function compute_sum_product(array) {
  let sum = 0,
    pro = 1;

  array.forEach((el, idx) => {
    sum += el;
    pro *= el;
  });

  return { sum, pro };
}

console.log(compute_sum_product([1, 2, 3, 4]));

// add elements to existing array

function addEls(arr, input) {
  arr.push(input);
  return arr;
}

console.log(addEls([23, 12, 25], 2));
