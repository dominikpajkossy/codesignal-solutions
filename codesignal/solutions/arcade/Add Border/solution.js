function solution(picture) {
  let retArr = [];
  let row = "";
  for (var i = 0; i < picture[0].length + 2; i++) {
    row += "*";
  }
  retArr.push(row);
  for (var i = 0; i < picture.length; i++) {
    row = "*";
    for (var j = 0; j < picture[i].length; j++) {
      row += picture[i][j];
    }
    row += "*";
    retArr.push(row);
  }
  row = "";
  for (var i = 0; i < picture[0].length + 2; i++) {
    row += "*";
  }
  retArr.push(row);
  return retArr;
}
