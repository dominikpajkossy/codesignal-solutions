function solution(startTag) {
  let closeTag = "";
  for (var i = 0; i < startTag.length; i++) {
    if (startTag[i] === "<") {
      for (var j = i + 1; j < startTag.length; j++) {
        if (startTag[j].match(/[a-zA-Z0-9]/)) {
          closeTag += startTag[j];
        } else break;
      }
    }
  }
  return "</" + closeTag + ">";
}
