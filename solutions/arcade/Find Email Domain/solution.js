function solution(address) {
  function addFromScratch(pos, email) {
    let retArr = [];
    for (var i = pos; i < email.length; i++) {
      retArr.push(email[i]);
    }
    return retArr.join("");
  }
  for (var i = 0; i < address.length; i++) {
    if (address[i] === "@") {
      var truncMail = addFromScratch(i + 1, address);
    }
  }
  return truncMail;
}
