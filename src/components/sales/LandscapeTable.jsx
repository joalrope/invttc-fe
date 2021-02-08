import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductForSale } from '../../actions/products'
import { getSelectedProduct } from '../../helpers/sales/add-products-for-sale'
import {getCellAlign, getCellClass, getCellValue, getTitleHeader, isCellVisible} from '../../helpers/sales/get-table-attributes'

export const LandscapeTable = ({data}) => {
  const dispatch = useDispatch();
  const {activeProduct} = useSelector(state => state.product)
  
  const handleClick = (key, brand) => {
    const selectedProduct = getSelectedProduct(key, brand, activeProduct)
    dispatch(addProductForSale(selectedProduct))
  }

  return (
    <div>
      <table className="landscape-table" >
        <thead>
          <tr>
          {
            Object.keys(data[0]).map(value => (
              (isCellVisible(value)) &&  <th key={value}>{getTitleHeader(value)}</th> 
            ))
          }
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                {
                  Object.entries(value).map( ([id, {value, span}]) => (
                    (isCellVisible(id)) && <td key={id+key}
                                            rowSpan={span}
                                            align={getCellAlign(id)}
                                            className={getCellClass(id)}
                                            onClick={() => handleClick(id, value)}
                                        >
                                          {getCellValue(value, id)}
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
