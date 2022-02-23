function findOddNames(list) {
  return list.filter(
    (developer) =>
      developer.firstName
        .split("")
        .reduce((acc, curr) => acc + curr.charCodeAt(), 0) % 2 === 1
  );
}