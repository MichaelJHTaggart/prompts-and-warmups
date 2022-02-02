function positiveSum(arr) {
 let zero = 0
 let answer = arr.filter((number) => Math.sign(number) === 1).reduce(function (previousValue, currentValue) {
   console.log(previousValue, currentValue)
   return previousValue + currentValue;
}, zero)
return answer
}