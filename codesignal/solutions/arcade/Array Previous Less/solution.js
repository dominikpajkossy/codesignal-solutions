function solution(items) {
  return items.map((n, i) => {
    for (; i--; ) if (items[i] < n) return items[i];
    return -1;
  });
}
