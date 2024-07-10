function solution(s, t) {
  var count = 0;
  t = t.split("");
  for (var i = 0; i < s.length; i++) {
    let found = false;
    for (var j = 0; j < t.length; j++) {
      if (t[j] == s[i]) {
        t.splice(j, 1);
        found = true;
        break;
      }
    }
    if (!found) count++;
  }
  return count;
}
