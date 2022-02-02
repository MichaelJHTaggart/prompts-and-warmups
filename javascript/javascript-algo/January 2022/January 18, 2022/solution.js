function removeChar(str){
 return str.substring(1, str.length - 1)
};

//First Solution:
/*
function removeChar(str){
  let array = str.split("")
  array.splice(0, 1)
  array.splice(array.length - 1, 1)
  return array.join("")
};
*/