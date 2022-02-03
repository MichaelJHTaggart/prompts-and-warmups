function highAndLow(numbers) {
 let numArr = numbers.split(" ");
 let high = Math.max(...numArr);
 let low = Math.min(...numArr);
 return `${high} ${low}`
};
