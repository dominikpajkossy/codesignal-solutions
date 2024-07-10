function solution(image) {
  let newImage = [];
  for (var i = 1; i < image.length - 1; i++) {
    let row = [];
    for (var j = 1; j < image[0].length - 1; j++) {
      let sum =
        image[i - 1][j - 1] +
        image[i - 1][j] +
        image[i - 1][j + 1] +
        image[i][j - 1] +
        image[i][j] +
        image[i][j + 1] +
        image[i + 1][j - 1] +
        image[i + 1][j] +
        image[i + 1][j + 1];
      row.push(Math.floor(sum / 9));
    }
    newImage.push(row);
  }
  return newImage;
}
