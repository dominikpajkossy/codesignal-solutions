function solution(coins, price) {
  let used = 0;
  coins = coins.sort(function (a, b) {
    return b - a;
  });
  for (var i = 0; i < coins.length; i++) {
    used += Math.floor(price / coins[i]);
    price = price % coins[i];
  }
  return used;
}
