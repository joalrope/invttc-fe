import {colData} from '../../assets/data/columns'


export const headDisplay = (id) => colData(id).title
      
export const cellDisplay = (value, id) =>{
  if (colData(id).type === 'number' ) {
    return parseFloat(value).toFixed(2)
  }
  return value
}

export const cellAlign = (id) => colData(id).aling

export const handleClick = (item) => {
  console.log(item)
}

export const valDisplay = (id) => {
    if (colData(id).type === 'noShow') return false
    return true
}