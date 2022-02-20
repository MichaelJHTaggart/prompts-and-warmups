// Solution:
function findAdmin(list, lang) {
  return list.filter(item => item.language === lang && item.githubAdmin === 'yes');
}