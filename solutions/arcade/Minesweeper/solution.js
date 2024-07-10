function solution(matrix) {
  let numMatrix = [];
  for (var i = 0; i < matrix.length; i++) {
    let row = [];
    for (var j = 0; j < matrix[0].length; j++) {
      let mines = 0;
      if (i - 1 >= 0 && j - 1 >= 0) {
        if (matrix[i - 1][j - 1] == true) mines++;
      }
      if (i - 1 >= 0 && j >= 0) {
        if (matrix[i - 1][j] == true) mines++;
      }
      if (i - 1 >= 0 && j + 1 <= matrix[0].length) {
        if (matrix[i - 1][j + 1] == true) mines++;
      }
      if (i >= 0 && j - 1 >= 0) {
        if (matrix[i][j - 1] == true) mines++;
      }
      if (i >= 0 && j + 1 <= matrix[0].length) {
        if (matrix[i][j + 1] == true) mines++;
      }
      if (i + 1 <= matrix.length - 1 && j - 1 >= 0) {
        if (matrix[i + 1][j - 1] == true) mines++;
      }
      if (i + 1 <= matrix.length - 1 && j >= 0) {
        if (matrix[i + 1][j] == true) mines++;
      }
      if (i + 1 <= matrix.length - 1 && j + 1 <= matrix[0].length) {
        if (matrix[i + 1][j + 1] == true) mines++;
      }
      row.push(mines);
    }
    numMatrix.push(row);
  }
  return numMatrix;
}
