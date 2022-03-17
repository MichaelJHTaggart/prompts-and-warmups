const prevMultOfThree = n => {
 while (n % 3 !== 0) {
    n = Math.floor(n / 10);
  }
  return n === 0 ? null : n;
}