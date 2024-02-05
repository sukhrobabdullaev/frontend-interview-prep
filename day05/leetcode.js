function lengthOfLastWord(s) {
  let arr = s.trim().split(" ");
  console.log(arr);
  return arr[arr.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
