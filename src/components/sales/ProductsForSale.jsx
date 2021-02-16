import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableAttrib } from '../../helpers/sales/table-attrib-class'
import { columns } from '../../assets/data/products-for-sale-table'
import { replaceItemProdForSale } from '../../helpers/sales/sales-utils'
import { setQtyForSale } from '../../actions/products'

export const ProductsForSale = ({products}) => {
  const dispatch = useDispatch()
  const [qty, setQty] = useState(null);
  const [onEditMode, setOnEditMode] = useState({status: false, rowKey: null});
  const [headData] =  products
  const attrib = new TableAttrib(columns)
  const tax = 0.15
  const coin = 'Bs.'
  let subTotal = 0;
  
  const {productsForSale} = useSelector(state => state.product)
  const selectedIndex = (id) => productsForSale.findIndex(item => item.id === id)

  const onEdit = (key, id, currentQty) => {
    if (key === 'qty'){
      setOnEditMode({
        status: true,
        rowKey: id
      })

      setQty(Number(currentQty));
    } else {
      if (onEditMode.status) {
        const index = selectedIndex(id)
        const prodForSaleSel = productsForSale[index]

        prodForSaleSel['qty'] = Number(qty)
        prodForSaleSel['total'] = Number(qty) * Number(prodForSaleSel['salePrice'])
        const products = replaceItemProdForSale(prodForSaleSel, productsForSale)

        dispatch(setQtyForSale(products))
        onCancel()
      }
    }
  }
  
  const onCancel = () => {
    setOnEditMode({
      status: false,
      rowKey: null
    })

    setQty(null);
  }
  
  const handleKeyPress = (id, value, key) => {
    if (key === 'Enter') {
      setQty(Number(value))
      onEdit('id', id, Number(value))
    }
  }
    
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
                attrib.isCellVisible(key) && <th key={key}>{attrib.getTitleHeader(key)}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(products).map(([ids, values]) => (
              <tr key={values.id}>
                {
                  Object.entries(values).map(([key, value]) => (
                    
                    (onEditMode.status && 
                     onEditMode.rowKey === values.id &&
                     attrib.isCellEditable(key))
                    ? attrib.isCellVisible(key) && <input type="number" key={values.id} 
                                                          // ref={inputQtyRef}
                                                          autoFocus={true}
                                                          onBlur={() => onEdit('id', values.id, value)}
                                                          className="input-qty"
                                                          value={qty}
                                                          onChange={(e) => setQty(e.target.value)}
                                                          onKeyPress={(e) => handleKeyPress(values.id, e.target.value, e.key)}
                      />
                    : attrib.isCellVisible(key) && <td key={key}
                          className={attrib.getCellClass(key)}
                          onClick={() => onEdit(key, values.id, value)}
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
            <th className="text-right">{`I.V.A. (${tax*100}%):`}</th>
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
