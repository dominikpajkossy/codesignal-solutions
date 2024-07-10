function solution(matrix, a, b) {
  let union = 0;
  for (var i = 0; i < matrix[a].length; i++) {
    if (i !== b) union += matrix[a][i];
  }
  for (var i = 0; i < matrix.length; i++) {
    union += matrix[i][b];
  }
  return union;
}
