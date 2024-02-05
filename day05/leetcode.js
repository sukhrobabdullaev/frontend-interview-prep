function lengthOfLastWord(s) {
  let arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));

function removeElement(nums, val) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // nums[1]=nums[1], nums[2]=nums[2]....
      nums[j++] = nums[i];
    }
  }

  return j;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
