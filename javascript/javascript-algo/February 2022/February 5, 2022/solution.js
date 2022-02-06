// Solution:
const removeConsecutiveDuplicates = (str) => {
  let result = [];
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== words[i + 1]) {
     result.push(words[i]);
    }
  }
 return result.join(" ");
}

// Solution 2:
const removeConsecutiveDuplicates = (str) => {
  return str.split(" ").filter((word, index, arr) => word !== arr[index + 1]).join(" ");
}

// Solution 3: using a for loop and splice:
const removeConsecutiveDuplicates = (str) => {
 let words = str.split(" ");
 for (let i = 0; i < words.length; i++) {
   if (words[i] === words[i + 1]) {
     words.splice(i, 1);
     i--;
   }
 }
 return words.join(" ");
}