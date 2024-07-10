function solution(inputString) {
  let string1 = "";
  let string2 = "";
  string1 = inputString.substring(0, Math.floor(inputString.length / 2));
  string2 = inputString.substring(Math.floor(inputString.length / 2));
  if (string1 === string2) return true;
  return false;
}
