//The following code works, rewrite the function to be more efficient
var kookaCounter = function (laughing) {
  let count = 0;
  let gender = "";

  if (laughing === "") {
    return 0
  } else {
    gender = laughing[0]
    count++
    for (let i = 0; i < laughing.length; i++) {
      if (laughing[i] === gender) {
      } else if(laughing[i] === "h" || laughing[i] === 'H') {
        count++
        gender = laughing[i]
      }
      i++
    } 
  }
  return count
}
