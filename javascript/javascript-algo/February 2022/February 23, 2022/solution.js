function askForMissingDetails(list) {
  let missingDetails = [];
  for (let i = 0; i < list.length; i++) {
      let obj = list[i];
      for (let key in obj) {
          if (obj[key] === null) {
              obj.question = 'Hi, could you please provide your ' + key + ".";
              missingDetails.push(obj);
          }
      }
  }
  return missingDetails;
}
