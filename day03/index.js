// SUM of array elements in a recursive way.

function sum(arr, i = 0) {
  if (i == arr.length) return 0;
  else return arr[i] + sum(arr, i + 1);
}

console.log(sum([2, 4, 6])); // 12

// BUBBLE sort algorithm

function bubble_sort(arr) {
  let size = arr.length - 1;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap them if they are in the wrong order
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubble_sort([8, 5, 2, 4, 3]));

// SELECTION sort algorithm

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // assmume the curent index is minimum
    let minIndex = i;

    // find the index of minimum element in the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // swap the found minimum element with the first element of the array
    if (minIndex !== i) {
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}
console.log(selectionSort([8, 5, 2, 4, 3]));
