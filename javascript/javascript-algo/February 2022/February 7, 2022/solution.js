function dateNbDays(a0, a, p) {
  let days = 0;
  let date = new Date(2016, 0, 1);
  while (a0 < a) {
    a0 = a0 + a0 * p / 36000;
    days++;
  }
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}