import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductForSale } from '../../actions/products'
import { getSelectedProduct } from '../../helpers/sales/add-products-for-sale'
import {TableAttrib} from '../../helpers/sales/table-attrib-class'
import {columns} from '../../assets/data/json-to-html-table'
import {parseJwt} from '../../helpers/parse-jwt'

export const LandscapeTable = ({data}) => {
  const dispatch = useDispatch();
  const {activeProduct} = useSelector(state => state.product)
  const role = parseJwt()

  const attrib = new TableAttrib(columns)
  
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
              (attrib.isCellVisible(value)) &&  <th key={value}>{attrib.getTitleHeader(value)}</th> 
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
                    (attrib.isCellVisible(id, role)) && <td key={id+key}
                                            rowSpan={span}
                                            align={attrib.getCellAlign(id)}
                                            className={attrib.getCellClass(id)}
                                            onClick={() => handleClick(id, value)}
                                        >
                                          {attrib.getCellValue(id, value)}
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
