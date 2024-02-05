// find the leap years in  given range of years.

function leap_year_range(st_year, end_year) {
  // initialize an array
  let year_range = [];

  for (let i = st_year; i <= end_year; i++) {
    year_range.push(i);
  }

  let new_array = [];

  year_range.forEach((year) => {
    if (test_LeapYear(year)) {
      new_array.push(year);
    }
  });

  return new_array;
}

function test_LeapYear(year) {
  if (
    (year % 4 == 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

console.log(leap_year_range(2020, 2030));

// shuffle array - bubble sort

function shuffle(arr) {
  let counter = arr.length,
    temp,
    index;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;

    temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
}

console.log(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

// binary search algorithm

function binary_Search(arr, target) {
  let low = 0,
    high = arr.length - 1, // 7
    mid,
    guess;

  while (low <= high) {
    mid = Math.floor((low + high) / 2); // 4
    guess = arr[mid]; // 5

    if (guess > target) {
      // 5>2
      high = mid - 1; //
    } else {
      low = mid + 1; // 5
    }

    if (guess == target) {
      return mid;
    }
  }
}

let items = [1, 2, 3, 4, 5, 7, 8, 0];
console.log(binary_Search(items, 3)); // 2

// sum of arrays

function sum_of_arrays(arr1, arr2) {
  const result = [];

  let ctr = 0;
  let x = 0;

  if (arr1.length === 0) return "array1 is empty";
  if (arr2.length === 0) return "array2 is empty";

  while (ctr < arr1.length && ctr < arr2.length) {
    result.push(arr1[ctr] + arr2[ctr]);
    ctr++;
  }

  if (ctr == arr1.length) {
    for (x = ctr; x < arr2.length; x++) {
      result.push(arr2[x]);
    }
  } else {
    // Append the remaining elements from array1 to the result array
    for (x = ctr; x < array1.length; x++) {
      result.push(array1[x]);
    }
  }

  return result;
}

let array1 = [1, 0, 2, 3, 4, 10, 0, 1];
let array2 = [3, 5, 6, 7, 8, 13];

console.log(sum_of_arrays(array1, array2));
/**
 * [1,0,2,3,4]
 * [3,5,6,7,8,13]
 *
 * [4,5,8,10,12,13]
 *
 *
 */
