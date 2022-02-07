// Solution:
const digitize = (n) => {
 let arr = [];
 while (n > 0) {
  arr.push(n % 10);
  n = Math.floor(n / 10);
 }
 return arr;
}


// Solution 2: 
const digitize = (n) => {
  return String(n).split('').map(Number)
}
