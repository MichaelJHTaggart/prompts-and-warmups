 
// Solution 1
function findSenior(list) {
  let arr = [];
  let maxAge = 0;
  let maxAgeIndex = 0;
  let maxAgeArr = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].age > maxAge) {
      maxAge = list[i].age;
      maxAgeIndex = i;
    }
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i].age === maxAge) {
      maxAgeArr.push(list[i]);
    }
  }

  return maxAgeArr;
}

// Solution 2
function findSenior(list) {
  let maxAge = 0;
  let maxAgeArr = [];

  list.forEach(function (item) {
    if (item.age > maxAge) {
      maxAge = item.age;
    }
  });

  list.forEach(function (item) {
    if (item.age === maxAge) {
      maxAgeArr.push(item);
    }
  });

  return maxAgeArr;
}
