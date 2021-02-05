import React from 'react'
import { cellAlign, cellDisplay, headDisplay } from '../../helpers/sales/get-table-attributes';

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
                <th key={key}>{headDisplay(key)}</th>
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
                        align={cellAlign(key)}
                    >
                      {cellDisplay(value, key)}
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
