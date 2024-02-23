function sockMerchant(n, ar) {
  // Sort the array to group colors together
  ar.sort((a, b) => a - b);

  // Initialize variables
  let pairs = 0;
  let currentColor = ar[0];
  let currentCount = 1;

  // Iterate through the sorted array to count pairs
  for (let i = 1; i < n; i++) {
    if (ar[i] === currentColor) {
      // Increment count for current color
      currentCount++;
    } else {
      // Calculate pairs for the current color
      pairs += Math.floor(currentCount / 2);
      // Move to the next color -> 10 ->
      currentColor = ar[i];
      console.log(currentColor); // 20, 30, 50
      currentCount = 1;
    }
  }

  // Calculate pairs for the last color
  pairs += Math.floor(currentCount / 2);

  return pairs; // Return the total number of pairs
}

// Example usage:
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const n = ar.length;
console.log(sockMerchant(n, ar)); // Output: 3
