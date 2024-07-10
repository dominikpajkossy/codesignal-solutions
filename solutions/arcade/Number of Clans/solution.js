function isFriends(divisors, a, b) {
  for (var i in divisors) {
    if (
      !(a % divisors[i] == 0 && b % divisors[i] == 0) &&
      !(a % divisors[i] != 0 && b % divisors[i] != 0)
    )
      return false;
  }
  return true;
}
function solution(divisors, k) {
  let hash = {};
  for (var i = 2; i <= k; i++) {
    let shouldAdd = true;
    for (var key in hash) {
      if (isFriends(divisors, key, i)) {
        shouldAdd = false;
        break;
      }
    }
    if (shouldAdd) {
      hash[i] = 1;
    }
  }
  let count = 0;
  for (var key in hash) {
    count++;
  }
  return count;
}
