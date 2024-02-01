/**
 * Write a JavaScript function to check whether an `input` is an array or not.
    Test Data :
    console.log(is_array('w3resource'));
    console.log(is_array([1, 2, 4, 0]));
    false
    true
 */

function is_array(input) {
  return toString.call(input) == "[object Array]";
}
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));
// console.log(toString.call(333)); [object Number]...

function array_Clone(arr) {
  return [...arr]; // array destrcutor
  // return arr.slice(0);
  // return Array.from(arr);
  // return arr.filter((el) => true);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

function first(arr, n) {
  if (arr == null) return;

  if (n == null) return arr[0];
  if (n < 0) return [];

  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2])); // n=null arr[0]
console.log(first([], 3)); // 0->3 []
console.log(first([7, 9, 0, -2], 3)); // 0,3 -> [7,9,0]
console.log(first([7, 9, 0, -2], 6)); // 0,6 -> [full]
console.log(first([7, 9, 0, -2], -3)); // []

function arrtoString(array) {
  //   return array.join(",");
  let sum = "";
  array.forEach((el) => {
    sum += `,${el}`;
  });
  return sum;
}

console.log(arrtoString(["Red", "Green", "White", "Black"]));

function insert_dash_toNum(num) {
  let res = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i - 1] % 2 == 0 && num[i] % 2 == 0) {
      res.push("-", num[i]);
    } else {
      res.push(num[i]);
    }
  }

  return res.join("");
}

console.log(insert_dash_toNum("12345686"));

function findSmallest(arr) {
  let smallest = arr[0],
    smallest_index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
      return smallest_index;
    }
  }
}
function sortArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let smallest = findSmallest(arr); // 5
    newArr.push(arr.pop(smallest));
  }
  return newArr;
}

console.log(sortArr([-3, 8, 7, 6, 5, -4, 3, 2, 1]));

// most frequent item in an array
function findFrequent(arr) {
  let mf = 1; // most frequent
  let m = 0;
  let item;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        m++;
      }
      if (mf < m) {
        mf = m;
        item = arr[i];
      }
    }
    m = 0;
  }
  return `${item} ${mf} times`;
}

console.log(findFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

function getDescOfArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("row " + i);

    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

getDescOfArr([
  [1, 2, 1, 24], // arr[0].length=4
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
]);
