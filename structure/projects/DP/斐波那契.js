
var fib = function (n) {
  if (n <= 1) {
    return 1;
  }

  let a1 = 1,
    a2 = 1,
    result = 2;
  for (let i = 2; i <= n; i++) {
    result = (a1 + a2) % 1000000007;
    a1 = a2;
    a2 = result;
  }
  return result;
};