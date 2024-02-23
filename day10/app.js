function sockMerchant(ar, n) {
  const count = {};

  for (let color of ar) {
    count[color] = (count[color] || 0) + 1;
  }
  // console.log(count); // { '10': 4, '20': 3, '30': 1, '50': 1 }

  let pairs = 0;

  for (const color in count) {
    const colorCount = count[color];
    // console.log(colorCount); // 4 3 1 1
    pairs += Math.floor(colorCount / 2);
  }

  return pairs;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20], 9));
