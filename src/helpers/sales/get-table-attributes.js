// import {colData} from '../../assets/data/columns'
// import {parseJwt} from '../parse-jwt'


// export const getTitleHeader = (id) => colData(id).title
      
// export const getCellValue = (value, id) =>{
//   if (colData(id).type === 'number' ) {
//     return parseFloat(value).toFixed(2)
//   }
//   return value
// }

// export const getCellClass = (id) => colData(id).class

// export const getCellAlign = (id) => colData(id).aling

// export const isCellVisible = (key) => {
//   const {role} = parseJwt();
  
//   if (typeof colData(key).visible === 'boolean') {
//     return colData(key).visible
//   }

//   return (colData(key).visible.includes(role)) ? true : false
// }