import React from 'react';
import {cellAlign, cellDisplay, headDisplay, valDisplay} from '../../helpers/sales/get-table-attributes';


export const PortraitTable = ({data}) => {
  let {id, code} = data
  code = code[0].value
  id = id[0].value

  const handleClick = (field, code, trademark) => {
    if (field === 'trademark') console.log(id, field, code, trademark)
  }

  
  return (
      <table className="portrait-table" >
        <tbody>
          {
            Object.entries(data).map((entry) => (   
              <tr key={entry[0]}> 
                {
                  (valDisplay(entry[0])) && <th key={entry[0]}>
                                              {headDisplay(entry[0])}
                                            </th>
                }
                {
                  Object.values(entry[1]).map(item => (            
                    (valDisplay(entry[0])) && <td key={entry[0]+item.value}
                                                  colSpan={item.span}
                                                  align={cellAlign(entry[0])}
                                                  onClick={() => handleClick(entry[0], code, item.value)}
                                              >
                                                {cellDisplay(item.value, entry[0])}
                                              </td>
                  ))
                }
              </tr>  
            ))
          }
        </tbody>
      </table>
  )
}
