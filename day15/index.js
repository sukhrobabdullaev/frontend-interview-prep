function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}

let makeCounter = counter();

console.log(makeCounter());
console.log(makeCounter());
console.log(makeCounter());
