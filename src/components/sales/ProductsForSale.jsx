import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TableAttrib } from '../../helpers/sales/table-attrib-class'
import { columns } from '../../assets/data/products-for-sale-table'
import { deleteItemProdForSale, replaceItemProdForSale } from '../../helpers/sales/sales-utils'
import { setProductsForSale } from '../../actions/products'
import { ActionButtom } from '../buttons/ActionButtom'

export const ProductsForSale = ({products}) => {
  const dispatch = useDispatch()
  const [qty, setQty] = useState(null);
  const [onEditMode, setOnEditMode] = useState({status: false, rowKey: null});
  const [headData] =  products
  const attrib = new TableAttrib(columns)
  const tax = 0.15
  const coin = 'Bs.'
  
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

        dispatch(setProductsForSale(products))
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


  const subTotal = Object.values(products).reduce((total, {total: item}) => {
    return total + item
  }, 0)

  const totalTax = subTotal * tax;
  const gralTotal = subTotal + totalTax

  const handleDeleteBtnClick = (rowId) => {
    const products = deleteItemProdForSale(rowId, productsForSale)

    dispatch(setProductsForSale(products))
  }
  
  const handleEditBtnClick = (rowId) => {
    const index = selectedIndex(rowId)
    const selection = productsForSale[index]
    const currentQty = Number(selection['qty'])

    onEdit('qty', rowId, currentQty)
  }
  

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
            Object.values(products).map((values) => (
              <tr key={values.id}>
                {
                  Object.entries(values).map(([key, value]) => (
                    
                    (onEditMode.status && 
                     onEditMode.rowKey === values.id &&
                     attrib.isCellEditable(key))
                      ? attrib.isCellVisible(key) && <input type="number" key={values.id} 
                                                            min={"1"}
                                                            autoFocus={true}
                                                            onBlur={() => onEdit('id', values.id, value)}
                                                            className="input-qty"
                                                            value={qty}
                                                            onChange={(e) => setQty(e.target.value)}
                                                            onKeyPress={(e) => handleKeyPress(values.id, e.target.value, e.key)}
                        />
                      : attrib.isCellVisible(key) && 
                        <td key={key}
                            className={attrib.getCellClass(key)}
                            onClick={() => onEdit(key, values.id, value)}
                        >
                            {attrib.getCellValue(key, value)}
                        </td>
                  ))
                }
                <ActionButtom type='edit' row={values.id} handleClick={handleEditBtnClick} />
                <ActionButtom type='delete' row={values.id} handleClick={handleDeleteBtnClick} />
              </tr>
            ))
          }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}></td>
            <th colSpan= {2} className="text-right">SUB-TOTAL:</th>
            <th className="text-right">
              {attrib.getCellValue('total', subTotal)}
            </th>
          </tr>
          <tr>
            <td colSpan={3}></td>
            <th colSpan= {2} className="text-right">{`I.V.A. (${tax*100}%):`}</th>
            <th className="text-right">
              {attrib.getCellValue('total', totalTax)}
            </th>
          </tr>
          <tr>
            <td colSpan={3}></td>
            <th colSpan= {2} className="text-right">TOTAL VENTA ({coin}):</th>
            <th className="text-right">
              {attrib.getCellValue('total', gralTotal)}
            </th>
          </tr>

        </tfoot>
      </table>
    </div>
  )
}
