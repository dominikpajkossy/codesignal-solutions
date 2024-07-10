function solution(nums) {
  if (nums.length == 0) return [];
  if (nums.length == 1) return [nums[0].toString()];
  let numStr = nums[0].toString();
  let retArr = [];
  let last = "";
  for (var i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 !== nums[i]) {
      if (Number(numStr) !== nums[i - 1]) {
        numStr += "->" + nums[i - 1].toString();
      }
      retArr.push(numStr);
      numStr = nums[i].toString();
      last = "";
    } else {
      last = nums[i].toString();
    }
  }
  if (last.length > 0) {
    retArr.push(numStr + "->" + last);
  } else {
    retArr.push(numStr);
  }
  return retArr;
}
