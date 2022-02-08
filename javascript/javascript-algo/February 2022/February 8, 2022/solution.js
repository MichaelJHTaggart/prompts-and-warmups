// Solution 1:
function countDevelopers(list) {
 return list.filter(obj => {return obj.language === 'JavaScript' && obj.continent === 'Europe'}).length
}