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

// remove duplicates from an array

function removeDuplicates(arr) {
  let uniqueNumsSet = new Set(arr);

  return [...uniqueNumsSet];
}

console.log(removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));

// 2nd way to solve this problem

function removeDuplicatesFromArr(arr) {
  let x,
    len = arr.length,
    out = [],
    obj = {};

  for (x = 0; x < len; x++) {
    obj[arr[x]] = 0;
  }

  // for of is preferable for object iterations
  for (x in obj) {
    out.push(Number(x));
  }

  return out;
}
console.log(removeDuplicatesFromArr([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));

let obj = {
  1: 1,
  1: 2,
  2: 1,
  3: 1,
};

console.log(Object.keys(obj));

/**
    color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    o = ["th","st","nd","rd"]
    Write a JavaScript program to display the colors in the following way :
    "1st choice is Blue ."
    "2nd choice is Green."
    "3rd choice is Red."
 */

function createChoice(colors, out) {
  let res = "";
  for (let i = 0; i < colors.length; i++) {
    if (i % 10 == 1) {
      res += `${i}${out[1]} choice is ${colors[i - 1]},`;
    } else if (i % 10 == 2) {
      res += `${i}${out[2]} choice is ${colors[i - 1]},`;
    } else if (i % 10 == 3) {
      res += `${i}${out[3]} choice is ${colors[i - 1]},`;
    }
  }
  return res;
}

console.log(
  createChoice(
    [
      "Blue ",
      "Green",
      "Red",
      "Orange",
      "Violet",
      "Indigo",
      "Yellow ",
      "Green",
      "Green",
      "Green",
      "red",
      "red",
    ],
    ["th", "st", "nd", "rd"]
  )
);

// using ordinal number
function Ordinal(n) {
  // Define an array 'o' for suffixes of ordinal numbers
  var o = ["th", "st", "nd", "rd"],
    x = n % 100;
  console.log(x);
  console.log(x + (o[(x - 20) % 10] || o[x] || o[0]));
  // Return the ordinal number with the appropriate suffix
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

var color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
  "pink",
  "emerald",
  "sky",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
  "light",
];

for (n = 0; n < color.length; n++) {
  // Calculate the ordinal number for the current position
  var ordinal = n + 1;

  // Create a string with the ordinal number, color choice, and a period
  var output = Ordinal(ordinal) + " choice is " + color[n] + ".";

  // Output the string to the console
  console.log(output);
}
