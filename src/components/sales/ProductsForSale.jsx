import React from 'react'
import { getCellAlign, getCellValue, getTitleHeader } from '../../helpers/sales/get-table-attributes';

export const ProductsForSale = ({products}) => {
  const [headData] =  products

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
                <th key={key}>{getTitleHeader(key)}</th>
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
                        align={getCellAlign(key)}
                    >
                      {getCellValue(value, key)}
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
