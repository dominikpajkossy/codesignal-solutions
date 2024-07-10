function solution(commands) {
  let count = 0;
  let isTurning = false;
  commands = commands.split("");
  for (var i = 0; i < commands.length; i++) {
    if ((commands[i] === "L" || commands[i] === "R") && !isTurning) {
      isTurning = true;
    } else if ((commands[i] === "L" || commands[i] === "R") && isTurning) {
      count++;
      isTurning = false;
    } else if (commands[i] === "A" && isTurning === false) {
      count++;
    } else if (commands[i] === "A" && isTurning === true) {
    }
  }
  return count;
}
