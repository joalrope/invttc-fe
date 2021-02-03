import {colData} from '../../assets/data/columns'
import {parseJwt} from '../parse-jwt'


export const headDisplay = (id) => colData(id).title
      
export const cellDisplay = (value, id) =>{
  if (colData(id).type === 'number' ) {
    return parseFloat(value).toFixed(2)
  }
  return value
}

export const cellAlign = (id) => colData(id).aling

export const valDisplay = (key) => {
  const {role} = parseJwt();
  
  if (typeof colData(key).visible === 'boolean') {
    return colData(key).visible
  }

  return (colData(key).visible.includes(role)) ? true : false
}