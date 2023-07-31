
let cache = [
  {
    key: "token1",
    value: "start",
    lastAccessTime: new Date("2022-12-17T03:24:00"),
    score: 0.1,
  },
  {
    key: "token2",
    value: "two",
    lastAccessTime: new Date("2023-11-17T03:24:00"),
    score: 0.2,
  },
];
const cacheCapacity = 5;
function get(key) {
  let index = cache.map((item) => item.key).indexOf(key);
  if (index == -1) return -1;
  return cache[index].value;
}

console.log(get("token1"));

function put(key, value, weight) {
  let score =
    weight /
    Math.log(
      new Date().getTime() -
      (new Date(
        cache[cache.map((item) => item.key).indexOf(key)].lastAccessTime
      ).getTime() +
        1) +
      1
    );
  if (cache.length >= cacheCapacity) {
    cache.sort((a, b) => a.score - b.score);
    cache.pop();
  }
  if (get(key) !== -1) {
    cache = cache.filter((item) => item.key !== key);
  }
  cache.push({
    key,
    value,
    lastAccessTime: new Date(),
    score,
  });
}
put("token1", "b", 3);
console.log(cache);
