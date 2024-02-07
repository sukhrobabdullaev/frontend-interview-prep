// longest_common_starting_substring

function longest_common_starting_substring(arr) {
  if (!arr.length) return "";
  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const currentStr = arr[i]; // arr[1],arr[2]
    let j = 0;

    while (
      j < prefix.length &&
      j < currentStr.length &&
      prefix[j] === currentStr[j]
    ) {
      j++;
    }
    // Update the prefix to the common substring found so far
    prefix = prefix.slice(0, j);

    // If the prefix becomes empty, there's no common substring
    if (prefix === "") break;
  }
  return prefix;
}

console.log(longest_common_starting_substring(["flower", "flow", "flight"]));

function num_string_range(a, z, d = 1) {
  a = a.charCodeAt(); // 97
  z = z.charCodeAt(); // 122

  return [...Array(Math.floor((z - a) / d) + 1)].map(
    (_, i) => String.fromCharCode(a + i * d) // 97+1*3=100
  );
}

// console.log(num_string_range("a", "s", 3));

// let d = "d";
// console.log(d.charCodeAt()); // 100

// console.log([...Array(Math.floor((122 - 100) / 2) + 1)]);

function merge_array(array1, array2) {
  const seen = {}; // Object to store seen elements
  const result = []; // Array to store unique elements

  // Iterate over array1 and mark each element as seen
  for (const num of array1) {
    seen[num] = true;
    result.push(num); // Add all elements of array1 to the result
  }

  // Iterate over array2, add elements to result if not seen before
  for (const num of array2) {
    if (!seen[num]) {
      result.push(num);
      seen[num] = true;
    }
  }

  return result;
}

// Test data
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));

/*
* 31. Write a JavaScript function to remove a specific element from an array.
    Test data :
    console.log(remove_array_element([2, 5, 9, 6], 5));
    [2, 9, 6]
*/

function remove_array_element(arr, target) {
  //   let newArr = arr.filter((el) => el !== target);
  //   return newArr;
  let index = arr.indexOf(target);
  if (index > -1) {
    arr.splice(index, 1); // 4,1
  }

  return arr;
}

console.log(remove_array_element([2, 3, 9, 5, 10, 20], 5));

let arrr2 = [1, 3, 6, 3, -5];
console.log(arrr2);
console.log(arrr2.splice(1, 0));

function nthlargest(array, n) {
  //   let maxElement = array[0]; // Assume the first element as the maximum initially

  //   for (let i = 1; i < array.length; i++) {
  //     if (array[i] > maxElement) {
  //       maxElement = array[i]; // Update maxElement if current element is greater
  //     }
  //   }
  //   return maxElement;

  //   const sortedArray = array.sort((a, b) => b - a);
  //   return sortedArray[n - 1];

  let max; // Variable to store the current maximum element

  // Iterate 'n' times to find the nth largest element
  for (let i = 0; i < n; i++) {
    max = -Infinity; // Reset max to negative infinity for each iteration

    // Find the maximum element in the array
    for (const num of array) {
      if (num > max) {
        max = num; // Update max if current element is greater
      }
    }

    // Remove the maximum element from the array
    array.splice(array.indexOf(max), 1);
  }

  return max; // Return the nth largest element found
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // 89
