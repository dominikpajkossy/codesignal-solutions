function solution(matrix, column) {
  let retCol = [];
  for (var i = 0; i < matrix.length; i++) {
    retCol.push(matrix[i][column]);
  }
  return retCol;
}
