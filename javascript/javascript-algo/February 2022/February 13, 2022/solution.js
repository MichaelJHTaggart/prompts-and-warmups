// Solution 1:
function isSameLanguage(list) {
  let languageArray = list.map(developer => developer.language)
  for(let i = 0; languageArray.length > i; i++){ 
    for(let j = 1; languageArray.length > j; j++){ 
    if(languageArray[i] === languageArray[j]){
    } else {
      return false
    }
    }
  }
  return true
}

// Solution 2:
function isSameLanguage(list) {
 return list.every(person => person.language === list[0].language);
}
