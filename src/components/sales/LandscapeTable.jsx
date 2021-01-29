import React from 'react'
import {cellAlign, cellDisplay, headDisplay, valDisplay} from '../../helpers/sales/get-table-attributes'

export const LandscapeTable = ({data}) => {

  const handleClick = (item) => {
    console.log(item)
  }

  return (
    <div>
      <table className="landscape-table" >
        <thead>
          <tr>
          {
            Object.keys(data[0]).map(value => (
              (valDisplay(value)) &&  <th key={value}>{headDisplay(value)}</th> 
            ))
          }
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
    </div>
  )
}
