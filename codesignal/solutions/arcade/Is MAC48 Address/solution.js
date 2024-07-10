function solution(inputString) {
  if (inputString.match(/^([0-9A-F]{2}-){5}[0-9A-F]{2}$/)) return true;
  return false;
}
