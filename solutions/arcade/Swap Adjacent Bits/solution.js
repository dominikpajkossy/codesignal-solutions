function solution(n) {
  return (function (num) {
    let binary = num.toString(2);
    if (binary.length % 2 === 1) {
      let tmp = ["0"];
      tmp.push(binary);
      binary = tmp.join("");
    }
    binary = binary.split("");
    for (var i = 0; i < binary.length; i += 2) {
      let tmp;
      tmp = binary[i];
      binary[i] = binary[i + 1];
      binary[i + 1] = tmp;
    }
    return parseInt(binary.join(""), 2);
  })(n);
}
