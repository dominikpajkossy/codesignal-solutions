function solution(time) {
  let timeArr = time.split(":");
  if (
    timeArr[0] <= 23 &&
    timeArr[0] >= 0 &&
    timeArr[1] <= 59 &&
    timeArr[1] >= 0
  )
    return true;
  return false;
}
