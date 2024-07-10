function solution(arr) {
  if (arr.length < 1) return [];
  let tmp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = tmp;
  return arr;
}
