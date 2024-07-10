function solution(code) {
  let chunkArr = [];
  let chunkIndex = 0;
  chunkArr.push([]);
  for (var i = 0; i < code.length; i++) {
    chunkArr[chunkIndex].push(code[i]);
    if (chunkArr[chunkIndex].length == 8) {
      chunkArr[chunkIndex] = String.fromCharCode(
        parseInt(chunkArr[chunkIndex].join(""), 2),
      );
      chunkIndex++;
      i + 1 === code.length ? true : chunkArr.push([]);
    }
  }
  return chunkArr.join("");
}
