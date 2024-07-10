function solution(arr) {
  if (arr.length % 2 === 1) {
    if (
      arr[0] === arr[arr.length - 1] &&
      arr[0] === arr[Math.floor(arr.length / 2)]
    ) {
      return true;
    }
  } else {
    if (
      arr[0] === arr[arr.length - 1] &&
      arr[0] === Number(arr[arr.length / 2]) + Number(arr[arr.length / 2 - 1])
    ) {
      return true;
    }
  }
  return false;
}
