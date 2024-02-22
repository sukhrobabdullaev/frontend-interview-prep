let s = "the sky is blue";

const newS = [];
const originS = s.trim().split(" "); // 'the' 'sky' 'is' 'blue'
console.log(originS.reverse().join(" "));
for (let i = originS.length - 1; i > 0; i--) {
  newS.push(s[i]);
}

console.log(newS.join(" "));
