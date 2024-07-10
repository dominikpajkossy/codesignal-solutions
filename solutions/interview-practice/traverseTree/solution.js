function solution(t) {
  if (t === null) return [];
  let n = queue.shift();
  let res = [];
  let queue = [t];
  while (queue.length > 0) {
    res.push(n.value);
    n.left ? queue.push(n.left) : null;
    n.right ? queue.push(n.right) : null;
  }
  return res;
}
