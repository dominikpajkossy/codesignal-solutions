function solution(param1, param2) {
  let cont1 = [];
  let cont2 = [];
  let maxLen = 0;
  if (param1.toString().length > param2.toString().length) {
    maxLen = param1.toString().length;
  } else {
    maxLen = param2.toString().length;
  }
  for (var i = 0; i < maxLen; i++) {
    cont1.push(0);
    cont2.push(0);
  }
  for (var i = 0; i < param1.toString().length; i++) {
    cont1[i + maxLen - param1.toString().length] = param1.toString()[i];
  }
  for (var i = 0; i < param2.toString().length; i++) {
    cont2[i + maxLen - param2.toString().length] = param2.toString()[i];
  }
  let retNum = [];
  for (var i = 0; i < maxLen; i++) {
    retNum.push(
      (Number(cont1[i]) + Number(cont2[i])).toString()[
        (Number(cont1[i]) + Number(cont2[i])).toString().length - 1
      ],
    );
  }
  return parseInt(retNum.join(""));
}
