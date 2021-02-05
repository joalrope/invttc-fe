import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductForSale } from '../../actions/products'
import {cellAlign, cellClass, cellDisplay, headDisplay, valDisplay} from '../../helpers/sales/get-table-attributes'

export const LandscapeTable = ({data}) => {
  const dispatch = useDispatch();
  const {activeProduct} = useSelector(state => state.product)
  
  const handleClick = (id, brand) => {
    if (id === 'trademark') {
      const {code, title, info} = activeProduct
      const [{salePrice}] = info.filter(({trademark}) => trademark === brand)
      const qty = 1
      const total = qty * salePrice
      const selectedProduct = {code, title, trademark: brand, qty, salePrice, total}
      dispatch(addProductForSale(selectedProduct))
    }
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
            Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                {
                  Object.entries(value).map( ([id, {value, span}]) => (
                    (valDisplay(id)) && <td key={id+key}
                                            rowSpan={span}
                                            align={cellAlign(id)}
                                            className={cellClass(id)}
                                            onClick={() => handleClick(id, value)}
                                        >
                                          {cellDisplay(value, id)}
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
