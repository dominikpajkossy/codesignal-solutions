function solution(line) {
  let arr = line.split("#");
  if (arr.length === 3) {
    let chars = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    let rgxp;
    arr[0] = arr[0].replace(/_/g, "");
    arr[1] = arr[1].replace(/_/g, "");
    if (arr[0] > 10 && arr[0] <= 16) {
      rgxp = new RegExp(
        "^[0-9A-" +
          chars[arr[0] - 1].toUpperCase() +
          "a-" +
          chars[arr[0] - 1] +
          "]+$",
      );
    } else if (arr[0] > 1 && arr[0] <= 10) {
      rgxp = new RegExp("^[0-" + chars[arr[0] - 1] + "]+$");
    } else {
      return false;
    }
    if (arr[1].match(rgxp)) return true;
    return false;
  } else {
    if (line.match(/^_+$/)) return false;
    if (line.match(/^[0-9_]+$/g)) return true;
    if (arr.length != 3) return false;
  }
}
