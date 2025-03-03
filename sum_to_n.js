function sum_to_n_a(n) {
  /* for loop implementation */
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sum_to_n_b(n) {
  /* AP formula */
  let sum = n(n + 1) / 2;
  return sum;
}

function sum_to_n_c(n) {
  /* recursion */
  if (n == 1) {
    return 1;
  }

  return n + sum_to_n_c(n - 1);
}
