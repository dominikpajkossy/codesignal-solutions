function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  let eqCount = 0;
  if (yourLeft === friendsLeft) eqCount++;
  if (yourLeft === friendsRight) eqCount++;
  if (yourRight === friendsLeft) eqCount++;
  if (yourRight === friendsRight) eqCount++;
  if (eqCount >= 2) return true;
  else return false;
}
