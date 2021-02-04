import React from 'react'
import { useSelector } from 'react-redux'

export const ProductsForSale = () => {

  const state = useSelector(state => state.state)

  console.log(state)
  return (
    <div>
      <table className="products-for-sale-table mt-5" >
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Costo</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {
            // Object.entries(data).map((value) => (
            //   <tr key={value[0]}>
            //     {
            //       Object.entries(value[1]).map(item => (
            //         (valDisplay(item[0])) && <td key={item[0]+value[0]}
            //                                      rowSpan={item[1].span}
            //                                      align={cellAlign(item[0])}
            //                                      className={cellClass(item[0])}
            //                                      onClick={() => handleClick(item[0], code, item[1].value)}
            //                                   >
            //                                     {cellDisplay(item[1].value, item[0])}
            //                                   </td>
            //       ))
            //     }
            //   </tr>
            // ))
          }
        </tbody>
      </table>
    </div>
  )
}
