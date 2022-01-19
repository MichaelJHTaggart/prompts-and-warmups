//https://www.quora.com/Is-there-a-factorial-function-but-for-addition)

var summation = function (num) {
 return ((num ** 2 + num) / 2)
}

/*
First Solution:

var summation = function (num) {
  let sum = 0
  for(let i = 1; i <= num; i++){
    sum += i
  }
  return sum
}
*/