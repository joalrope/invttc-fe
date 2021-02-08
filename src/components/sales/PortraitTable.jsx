import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductForSale } from '../../actions/products';
import { getSelectedProduct } from '../../helpers/sales/add-products-for-sale';
import {getCellAlign, getCellClass, getCellValue, getTitleHeader, isCellVisible} from '../../helpers/sales/get-table-attributes';


export const PortraitTable = ({data}) => {
  const dispatch = useDispatch()
  const {activeProduct} = useSelector(state => state.product)


  const handleClick = (key, brand) => {
    const selectedProduct = getSelectedProduct(key, brand, activeProduct)
    dispatch(addProductForSale(selectedProduct))
  }

  
  return (
      <table className="portrait-table" >
        <tbody>
          {
            Object.entries(data).map(([key, value]) => (   
              <tr key={key}> 
                {
                  (isCellVisible(key)) && <th key={key}>
                                              {getTitleHeader(key)}
                                            </th>
                }
                {
                  Object.values(value).map(({value, span}) => (            
                    (isCellVisible(key)) && <td key={key+value}
                                                  colSpan={span}
                                                  align={getCellAlign(key)}
                                                  className={getCellClass(key)}
                                                  onClick={() => handleClick(key, value)}
                                              >
                                                {getCellValue(value, key)}
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
