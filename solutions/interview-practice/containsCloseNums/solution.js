function solution(nums, k) {
  let hash = {};
  for (var i in nums) {
    if (hash.hasOwnProperty(nums[i])) {
      hash[nums[i]].push(i);
      for (var j = 1; j < hash[nums[i]].length; j++) {
        if (Math.abs(hash[nums[i]][j - 1] - hash[nums[i]][j]) <= k) return true;
      }
    } else {
      hash[nums[i]] = [i];
    }
  }
  return false;
}
