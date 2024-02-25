// if (!Array.prototype.map) {
Array.prototype.map = function (callback, thisArg) {
  var mappedArray = [];
  for (var i = 0; i < this.length; i++) {
    mappedArray.push(callback.call(thisArg, this[i], i, this));
  }
  return mappedArray;
};
// }

[1, 2, 3, 4].map((el, idx, ar) => {
  console.log(el, idx, ar);
});
