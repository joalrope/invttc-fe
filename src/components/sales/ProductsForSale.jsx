import React from 'react'
import { TableAttrib } from '../../helpers/sales/table-attrib-class'
import { columns } from '../../assets/data/products-for-sale-table'

export const ProductsForSale = ({products}) => {
  const [headData] =  products

  const attrib = new TableAttrib(columns)
  

  // const total = Object.values(products).map(({total}) => {
  //   return total+=
  // })
  
  return (
    <div>
      <table className="products-for-sale-table mt-5" >
        <thead>
          <tr>
            {
              Object.keys(headData).map((key) => (
                <th key={key}>{attrib.getTitleHeader(key)}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(products).map(([id, value]) => (
              <tr key={id}>
                {
                  Object.entries(value).map(([key, value]) => (
                    <td key={key+id}
                        align={attrib.getCellAlign(key)}
                    >
                      {(attrib.isCellEditable(key)) ? <input type="number" name={key} id=""/> :attrib.getCellValue(key, value)}
                      {/* {attrib.getCellValue(key, value)} */}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
        <tfoot>

        </tfoot>
      </table>
    </div>
  )
}
