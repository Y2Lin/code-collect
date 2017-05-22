function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

factorial(5) // 120


function factorialNew(n, total) {
  if (n === 1) return total;
  return factorialNew(n - 1, n * total);
}

factorialNew(5, 1) // 120