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