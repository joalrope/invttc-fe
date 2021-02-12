import React from 'react'
import { TableAttrib } from '../../helpers/sales/table-attrib-class'
import { columns } from '../../assets/data/products-for-sale-table'

export const ProductsForSale = ({products}) => {
  const [headData] =  products
  const attrib = new TableAttrib(columns)
  let subTotal = 0;
  const tax = 0.15
  const coin = 'Bs.'
  
  
  Object.values(products).map(({total}) => {
    if (total > 0) subTotal += total
    return subTotal
  })
  
  const totalTax = subTotal * tax;
  const gralTotal = subTotal + totalTax

  
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
                        className={attrib.getCellAlign(key)}
                    >
                      {attrib.getCellValue(key, value)}
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}></td>
            <th className="text-right">SUB-TOTAL:</th>
            <th className="text-right">
              {attrib.getCellValue('total', subTotal)}
            </th>
          </tr>
          <tr>
            <td colSpan={4}></td>
            <th className="text-right">IMPUESTO:</th>
            <th className="text-right">
              {attrib.getCellValue('total', totalTax)}
            </th>
          </tr>
          <tr>
            <td colSpan={4}></td>
            <th className="text-right">TOTAL VENTA ({coin}):</th>
            <th className="text-right">
              {attrib.getCellValue('total', gralTotal)}
            </th>
          </tr>

        </tfoot>
      </table>
    </div>
  )
}
