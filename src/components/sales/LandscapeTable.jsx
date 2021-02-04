import React from 'react'
import { useDispatch } from 'react-redux'
import { addProductForSale } from '../../actions/products'
import {cellAlign, cellClass, cellDisplay, headDisplay, valDisplay} from '../../helpers/sales/get-table-attributes'

export const LandscapeTable = ({data}) => {
  let {id, code} = data[0]
  code = code.value
  id = id.value

  const dispatch = useDispatch();

  const handleClick = (field, code, trademark) => {
    if (field === 'trademark') console.log(id, field, code, trademark)
    const qty = 1
    const salePrice = 10.75 
    dispatch(addProductForSale({id, code, qty, trademark, salePrice}))
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
            Object.entries(data).map((value) => (
              <tr key={value[0]}>
                {
                  Object.entries(value[1]).map(item => (
                    (valDisplay(item[0])) && <td key={item[0]+value[0]}
                                                 rowSpan={item[1].span}
                                                 align={cellAlign(item[0])}
                                                 className={cellClass(item[0])}
                                                 onClick={() => handleClick(item[0], code, item[1].value)}
                                              >
                                                {cellDisplay(item[1].value, item[0])}
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
