function solution(a, b) {
  let tmpString = b.split("");
  let count = 0;
  for (var x = 0; x < 10; x++) {
    let innerCount = a.length;
    for (var i = 0; i < a.length; i++) {
      let hasItem = false;
      for (var j = 0; j < tmpString.length; j++) {
        if (a[i] === tmpString[j]) {
          tmpString[j] = 0;
          hasItem = true;
          break;
        }
      }
      if (!hasItem) {
        break;
      } else {
        innerCount--;
      }
    }
    if (innerCount <= 0) count++;
  }
  return count;
}
