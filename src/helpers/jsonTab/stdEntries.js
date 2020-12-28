


export const stdEntries = (notStandardizedEntry, maxLen) => {

  let preStandardizedEntry = [];
  let addIndex = 0
  
  
  notStandardizedEntry.forEach((el, index, array) => {

    if (index + 1 === array.length) {
      el[0] = maxLen
    }

    preStandardizedEntry.push(el);
    
    if (el[0] > 1) {
        preStandardizedEntry.splice(index + addIndex + 1, 0, []);
        addIndex++
    }
   
  })

  return preStandardizedEntry
  
}