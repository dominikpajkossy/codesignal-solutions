function solution(matrix) {
  let axis1 = 0;
  let axis2 = matrix[0].length - 1;
  let axisArr1 = [];
  let axisArr2 = [];
  for (var i = 0; i < matrix.length; i++) {
    axisArr1.push(matrix[i][axis1]);
    axisArr2.push(matrix[i][axis2]);
    axis1 += 1;
    axis2 -= 1;
  }
  axis1 = 0;
  axis2 = matrix[0].length - 1;
  for (var i = 0; i < matrix.length; i++) {
    matrix[i][axis1] = axisArr2[axis1];
    matrix[i][axis2] = axisArr1[axis1];
    axis1 += 1;
    axis2 -= 1;
  }
  return matrix;
}
