function solution(number, width) {
  number = number.toString().split("");
  if (number.length > width) {
    return number.splice(number.length - width).join("");
  } else if (number.length === width) {
    return number.join("");
  } else {
    let ret = "";
    for (var i = 0; i < width - number.length; i++) {
      ret += "0";
    }
    return ret + number.join("");
  }
}
