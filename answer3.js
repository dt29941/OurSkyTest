function loop(n, cur) {
  if (!cur) {
    cur = 0;
  }
  if (n < 2) {
    throw new Error("Invalid input");
  }
  for (let i = n; i > 2; i--) {
    cur = cur + 1 / (i * (i - 1));
  }
  return 1 / 2 + cur;
}

console.log(loop(5, 3));
