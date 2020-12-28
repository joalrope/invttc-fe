/* eslint-disable array-callback-return */
let element = {};
let valuesItem = [];
let lengths = [];

let spanRow;


export const elements = (json, lastSpan = 1, reset = false) => {

  if (reset) {
    element = {}
  }

  Object.keys(json).map((k) => {

    valuesItem = element[k] || [];

    if (!isNaN(k)) {

      spanRow = 1;

      if (typeof json[k] === 'object') {

        const data = json[k];

        Object.keys(data).map((key) => {

          if (typeof data[key] === 'object') {

            spanRow = data[key].length;

          }
        })
      }
    } 

          
    if (json[k] && typeof json[k] === 'object') {

      if (Array.isArray(json[k]) && typeof json[k][0] !== 'object') {
        
        Object.keys(json[k]).map((index) => {
          
          valuesItem.push([lastSpan, json[k][index]]);
          element[k] = valuesItem;
          lengths.push(valuesItem.length)

        })

      } else {
        
        elements(json[k], spanRow);

      }
      
    } else {
      
      valuesItem.push([lastSpan, json[k]]);
      element[k] = valuesItem;
      lengths.push(valuesItem.length)
    
    }
  })

  return {
    values: element,
    maxLen: Math.max.apply(null, lengths)
  }
}