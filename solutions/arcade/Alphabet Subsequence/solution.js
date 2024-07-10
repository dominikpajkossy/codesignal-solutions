function solution(s) {
  for (var i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      if (s[i] >= s[i + 1]) {
        return false;
      }
    }
  }
  return true;
}
