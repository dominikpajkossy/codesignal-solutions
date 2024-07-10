function solution(name) {
  if (name.match(/^[a-zA-Z_$][a-zA-Z_$0-9]*$/)) {
    return true;
  } else {
    return false;
  }
}
