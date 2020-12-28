/* eslint-disable array-callback-return */
import {elements} from './elements.js';
import {stdEntries} from './stdEntries.js';


export const json2Tabular = (json, mode = 'landscape') => {

  if (json === null) return []

  const valuesRow = [];

  const {values, maxLen} = elements(json, 1, true);

  let i = 0;

  Object.entries(values).map((entry) => {

    entry[1].map((elem) => {
      elem.push(entry[0])
      elem.push(i)
    })
    
    i++
    
    const stdElements = stdEntries(entry[1], maxLen);

    stdElements.forEach((value, id) => {

      if (mode === 'portrait') {

        if (value.length > 0) {

          if (!valuesRow[value[3]]) {
            valuesRow[value[3]] = [];
          }
          
          valuesRow[value[3]].push(value);
        }
      } else {

        if (value.length > 0) {

          if (!valuesRow[id]) {
            valuesRow[id] = [];
          }
          
          valuesRow[id].push(value);
        }
      }
    });
  })

  return valuesRow
  
}