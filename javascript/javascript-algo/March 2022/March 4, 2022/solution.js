// function rowSumOddNumbers(n) {
//   n*(n-1)+1;
// }

let array = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Doe",
  },
  {
    id: 3,
    name: "Jane",
  },
]

const newValue = {
  id: 4,
  name: "Jack",
}

const value = 2

// update the array at index value with newValue
// without mutating array
//Solution:
function updateArray() {
  // your code here
  // const newArray = [...array];
  // newArray[value] = newValue;
  // return newArray;
  return array.map((item, index) => {
    if (index === props.currentId) {
      return {
        
      };
    }
    return item;
  });