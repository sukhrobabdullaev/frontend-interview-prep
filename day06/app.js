// 20 - 26 problems

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

function duplicateValues(arr) {
  let obj = {};
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 0;
    }
    obj[arr[i]] += 1;
  }

  for (let prop in obj) {
    if (obj[prop] >= 2) {
      res.push(prop);
    }
  }

  return res;
}

// console.log(duplicateValues([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6])); // ['4','7']

/**
 * 
 * 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
    Sample Data :
    console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
    [1, 2, 3, 4, 5, 6]
    console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
    [1, 2, 3, [[4]], 5, 6]
 *
 */
function flattenArray(arr) {
  return arr.reduce((flat, current) => {
    return flat.concat(
      Array.isArray(current) ? flattenArray(current) : current
    );
  }, []);
}

const nestedArray = [1, [2], [3, [[4]]], [5, 6]];
const flattenedArray = flattenArray(nestedArray);

// console.log(flattenedArray);

// 22. union of the two arrays

function unionArrays(arr1, arr2) {
  let res = [];
  if (arr1 == null || arr2 == null) return;
  let obj = {};

  for (let i = arr1.length - 1; i >= 0; --i) {
    obj[arr1[i]] = arr1[i];
  }
  for (let i = arr2.length - 1; i >= 0; --i) {
    obj[arr2[i]] = arr2[i];
  }
  for (let n in obj) {
    // if (obj.hasOwnProperty(n)) {
    res.push(obj[n]);
    // }
  }
  return obj;
}

console.log(unionArrays([1, 2, 3], [100, 2, 1, 10]));

let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];
let set1 = new Set(nums1);
let set2 = new Set(nums2);
console.log(set2);
console.log(new Set([...set2].filter((num) => set1.has(num))));

console.log(Array.from(new Set([...set2].filter((num) => set1.has(num)))));

/**
 * 
 * Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]

 */

function removeValues(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(removeValues([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 25

var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

let res = library.sort((a, b) => {
  if (a.title < b.title) return -1; // reverse array
  if (a.title > b.title) return 1;

  return 0;
});

console.log(res);

// 26. find pairs whose sum equals to target

let arrr = [10, 20, 10, 40, 50, 60, 70],
  target = 60;

let low = 0,
  high = arrr.length - 1;

while (low < high) {
  if (arrr[low] + arrr[high] > target) {
    high--;
  } else if (arrr[low] + arrr[high] < target) {
    low++;
  } else {
    console.log(low, high);
    low++;
    high--;
  }
}
