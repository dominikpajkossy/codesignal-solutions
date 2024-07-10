function solution(note) {
  let retArr = [];
  for (var i = 0; i < note.length; i++) {
    switch (note[i]) {
      case "a":
        retArr.push("0");
        break;
      case "b":
        retArr.push("1");
        break;
      case "c":
        retArr.push("2");
        break;
      case "d":
        retArr.push("3");
        break;
      case "e":
        retArr.push("4");
        break;
      case "f":
        retArr.push("5");
        break;
      case "g":
        retArr.push("6");
        break;
      case "h":
        retArr.push("7");
        break;
      case "i":
        retArr.push("8");
        break;
      case "j":
        retArr.push("9");
        break;
      case "0":
        retArr.push("a");
        break;
      case "1":
        retArr.push("b");
        break;
      case "2":
        retArr.push("c");
        break;
      case "3":
        retArr.push("d");
        break;
      case "4":
        retArr.push("e");
        break;
      case "5":
        retArr.push("f");
        break;
      case "6":
        retArr.push("g");
        break;
      case "7":
        retArr.push("h");
        break;
      case "8":
        retArr.push("i");
        break;
      case "9":
        retArr.push("j");
        break;
      default:
        retArr.push(note[i]);
    }
  }
  return retArr.join("");
}
