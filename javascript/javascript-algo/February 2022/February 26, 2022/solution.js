function reverseLetter(str) {
 const array = [...str]
 let newArray = []
 for (let i = array.length - 1; i >= 0; i--){
   if (array[i].match(/[a-z]/i)){
   newArray.push(str[i])
 }
 return newArray.join("")
 }
}