function solution(arr) {
  if (arr.length % 2 === 1) {
    return arr;
  } else {
    let sum = arr[arr.length / 2] + arr[arr.length / 2 - 1];
    arr.splice(arr.length / 2, 1);
    arr[Math.floor(arr.length / 2)] = sum;
  }
  return arr;
}
