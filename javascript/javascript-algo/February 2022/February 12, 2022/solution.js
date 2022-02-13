function countLanguages(list) {
 let object = {}
 list.map((developer)=>{
   object[developer.language] ? object[developer.language]++ : object[developer.language] = 1
 })
return object
}