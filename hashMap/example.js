let arrays = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];

let countMap = {};

// Loop through the outer array and inner arrays
arrays.forEach((innerArray) => {
  innerArray.forEach((element) => {
    if (countMap[element] === undefined) {
      countMap[element] = 1;
    } else {
      countMap[element]++;
    }
  });
});

// Log the count for each element
for (let key in countMap) {
  console.log(`Element ${key} occurs ${countMap[key]} times`);
}

const map1 = new Map();

map1.set("a", 1);
map1.set("e", 2);
map1.set("c", 3);
map1.set("a", 4); // priority
console.log(map1); // 'a'=>1,'b'=>2,'c'=>3

console.log(map1.get("a"));
// Expected output: 1

map1.set("a", 97);

console.log(map1.get("a"));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete("b");

console.log(map1.size);
// Expected output: 2

let myMap = new Map();

myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);

console.log(Array.from(myMap.values()));
const original = new Map([
  [1, "one"],
  ["2", "two"],
]);
console.log(original);
