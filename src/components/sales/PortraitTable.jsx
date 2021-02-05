import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductForSale } from '../../actions/products';
import {cellAlign, cellClass, cellDisplay, headDisplay, valDisplay} from '../../helpers/sales/get-table-attributes';


export const PortraitTable = ({data}) => {
  const {id: prodId, code: prodCode, title: prodTitle, salePrice: prodSalePrice} = data
  const [{value: id}] = prodId
  const [{value: code}] = prodCode
  const [{value: title}] = prodTitle
  const [{value: salePrice}] = prodSalePrice


  const dispatch = useDispatch()

  const handleClick = (field, trademark) => {
    if (field === 'trademark') {
    
      console.log(field, trademark)
      const qty = 1
      const subTotal = qty * salePrice
      dispatch(addProductForSale({id, code, title, trademark, qty, salePrice, subTotal}))
    }
  }

  
  return (
      <table className="portrait-table" >
        <tbody>
          {
            Object.entries(data).map(([key, value]) => (   
              <tr key={key}> 
                {
                  console.log(key, value)
                  (valDisplay(key)) && <th key={key}>
                                              {headDisplay(key)}
                                            </th>
                }
                {
                  Object.values(value).map(({value, span}) => (            
                    (valDisplay(key)) && <td key={key+value}
                                                  colSpan={span}
                                                  align={cellAlign(key)}
                                                  className={cellClass(key)}
                                                  onClick={() => handleClick(key, value)}
                                              >
                                                {cellDisplay(value, key)}
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
