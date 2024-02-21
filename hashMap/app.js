// a hashmap is associative array or an object data structure that allows me to store key-value pairs. The keys in a hashmap can be an value (objects or functions), while values can be any data type.

let map = {};

// Add key-value pairs to the map
map["key1"] = "value1";
map["key2"] = "value2";
map["key3"] = "value3";

// Access values in the map using keys
console.log(map["key1"]); // outputs: "value1"
console.log(map["key2"]); // outputs: "value2"
console.log(map["key3"]); // outputs: "value3"

// Check if a key exists in the map
console.log("key1" in map); // outputs: true
console.log("key4" in map); // outputs: false

// Remove a key-value pair from the map
delete map["key2"];
console.log("key2" in map); // outputs: false

// let map={}
// map['key1']='value1'
// added to the map using bracket notation, retrieve values the same
// in operator is used to check if a key exits in the map

// PURPOSE to count occurrencec of elements in array, maintain cache of data.

let array = [1, 2, 3, 2, 1, 3, 4, 4, 5];

let countMap = {};

// Loop through the array and count the occurrences of each element
array.forEach((element) => {
  if (countMap[element] === undefined) {
    countMap[element] = 1;
  } else {
    countMap[element]++;
  }
});

// Log the count for each element
for (let key in countMap) {
  console.log(`Element ${key} occurs ${countMap[key]} times`);
}

const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"
