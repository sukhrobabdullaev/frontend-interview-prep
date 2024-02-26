// prototype chaining
// ,, ['','']
// lambda-arrow!!!
// first-order, first-class
// let keyword
// IIFE
// memoization
// closures
// {}
// service worker!!!
// cookie
// promises
// promise.all race
// promise rules
// strict mode
/* var user = null;
  console.log(typeof user); 
*/

// pure component
// state vs props
// example
// controlled, undcontrolled.
// component lifecycle in class and functional
// limititions
// class methods
// testing - Jest
// react memo

const arr = [
  { name: "a", bucket: [1, 2, 3, 4, 5, 6] },
  { name: "b", bucket: [1, 9, 3, 4, 8] },
  { name: "c", bucket: [1, 6] },
  { name: "d", bucket: [1, 2, 3, 73] },
  { name: "a", bucket: [23, 14, 1, 4] },
  { name: "b", bucket: [4] },
  { name: "b", bucket: [1, 6] },
];

/**
 * sort() => 'a','a','b','c'...
 * bucket.concat(bucket+1)
 *
 *
 */
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  let buckets = [];
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i].name == arr[j].name && !newArr.includes(arr[i].name)) {
      newArr.push(arr[i].name);
      buckets.push(arr[i].bucket, arr[j].bucket);
    }
  }
}
console.log(newArr);

const combinedArr = arr.reduce((acc, obj) => {
  const existingObj = acc.find((item) => item.name === obj.name);
  console.log(existingObj);
  if (existingObj) {
    existingObj.bucket = [...new Set([...existingObj.bucket, ...obj.bucket])];
  } else {
    acc.push({ name: obj.name, bucket: [...new Set(obj.bucket)] });
  }

  return acc;
}, []);
