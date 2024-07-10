function solution(a) {
  let team1 = 0;
  let team2 = 0;
  let teamSwap = 1;
  for (var i = 0; i < a.length; i++) {
    if (teamSwap > 0) {
      team1 += a[i];
    } else {
      team2 += a[i];
    }
    teamSwap = teamSwap * -1;
  }
  return [team1, team2];
}
