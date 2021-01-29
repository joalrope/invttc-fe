import React from 'react';
import {cellAlign, cellDisplay, headDisplay, valDisplay} from '../../helpers/sales/get-table-attributes';


export const PortraitTable = ({data}) => {

  const handleClick = (item) => {
    console.log(item)
  }

  
  return (
    <div>
      <table className="portrait-table" >
            {console.log(data)}
                  {
                    Object.entries(data).map((value, index) => (
                      // console.log(value[0], value[1][0].value)
                      // key ==== value[0]
                      // [values] === value[1] 
                      <>
                      <thead>
                        <tr key={index}>
                          {
                            (valDisplay(value[0])) &&  <th key={value[0]}>{headDisplay(value[0])}</th>
                          }
                        </tr>
                      </thead>
                      <tbody>

                      </tbody>


                        
                        {
                          value[1].forEach((element, index) => (
                            // console.log(value[0], element.value, element.span)
                            (valDisplay(value[0])) && <td
                                                        key={value[0]+index}
                                                        rowSpan={element.span}
                                                        align={cellAlign(value[0])}
                                                        onClick={() => handleClick(element.value)}
                                                      >
                                                        {cellDisplay(element.value, value[0])}
                                                      </td>
                          ))
                        }
                        </>
                    ))
                  }
        {/* <tbody>
            {
              Object.entries(data).map((value) => (
                <tr key={value[0]}>
                  {
                    Object.entries(value[1]).map(item => (
                      (valDisplay(item[0])) && <td 
                                                  key={item[0]+value[0]}
                                                  rowSpan={item[1].span}
                                                  align={cellAlign(item[0])}
                                                  onClick={() => handleClick(item[1].value)}
                                                >
                                                  {cellDisplay(item[1].value, item[0])}
                                                </td>
                    ))
                  }
                </tr>
              ))
            }
        </tbody> */}
      </table>
    </div>
  )
}
