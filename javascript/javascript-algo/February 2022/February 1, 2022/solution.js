function getCount(str) { 
 let found = str.match(/[a,e,i,o,u]/gm)
 if (found == null){
   return 0
 } else {
   return found.length
 }
};