function solution(votes, k) {
  let max = 0;
  let maxcount = 0;
  for (var i = 0; i < votes.length; i++) {
    if (max < votes[i]) {
      max = votes[i];
      maxcount = 0;
    }
    if (max === votes[i]) maxcount++;
  }
  let winners = 0;
  if (k > 0) {
    for (var i = 0; i < votes.length; i++) {
      if (votes[i] + k > max) winners++;
    }
  }
  if (k === 0) {
    if (maxcount > 1) {
      winners = 0;
    } else {
      winners = 1;
    }
  }
  return winners;
}
