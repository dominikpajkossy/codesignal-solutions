function solution(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  let counter = 0;
  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        counter++;
        s1.splice(i, 1);
        s2.splice(j, 1);
        i--;
        j--;
      }
    }
  }
  return counter;
}
