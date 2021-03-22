import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { TableAttrib } from '../../classes/table-attrib-class';
import { columns } from '../../assets/data/products-for-sale-table';
import { deleteItemProdForSale, replaceItemProdForSale } from '../../helpers/sales/sales-utils';
import { setProductsForSale } from '../../actions/products';
import { ActionButtom } from '../generics/ActionButtom';
import '../../assets/css/sales.scss'

export const ProductsForSale = ({products}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(null);
  const [onEditMode, setOnEditMode] = useState({status: false, rowKey: null});
  const [headData] =  products;
  const attrib = new TableAttrib(columns);
  const tax = 0.15;
  const coin = 'Bs.';
  
  const {productsForSale} = useSelector(state => state.product);
  const selectedIndex = (id) => productsForSale.findIndex(item => item.id === id);

  const onEdit = (key, id, currentQty) => {
    if (key === 'qty'){
      setOnEditMode({
        status: true,
        rowKey: id
      });

      setQty(currentQty);
    } else {
      if (onEditMode.status) {
        const index = selectedIndex(id);
        const prodForSaleSel = productsForSale[index];

        prodForSaleSel['qty'] = qty;
        prodForSaleSel['total'] = qty * Number(prodForSaleSel['salePrice']);
        const products = replaceItemProdForSale(prodForSaleSel, productsForSale);

        dispatch(setProductsForSale(products));
        onCancel();
      }
    }
  }
  
  const onCancel = () => {
    setOnEditMode({
      status: false,
      rowKey: null
    });

    setQty(null);
  }
  
  const handleKeyPress = (id, value, key) => {
    if (key === 'Enter') {
      setQty(value);
      onEdit('id', id, value);
    }
  }

  const subTotal = Object.values(products).reduce((total, {total: item}) => {
    return total + item;
  }, 0);

  const totalTax = subTotal * tax;
  
  const gralTotal = subTotal + totalTax;

  const handleDeleteBtnClick = (rowId) => {
    const products = deleteItemProdForSale(rowId, productsForSale);

    dispatch(setProductsForSale(products));
  }
  
  const handleUpBtnClick = (rowId) => {
    const index = selectedIndex(rowId);
    const selection = productsForSale[index];
    selection['qty']++;
    selection['total'] = selection['qty']  * selection['salePrice'];
    const products = replaceItemProdForSale(selection, productsForSale);

    dispatch(setProductsForSale(products));
  }
  
  const handleDownBtnClick = (rowId) => {
    const index = selectedIndex(rowId);
    const selection = productsForSale[index];
    selection['qty']--;
    if (selection['qty'] < 1) selection['qty'] = 1;
    selection['total'] = selection['qty']  * selection['salePrice'];
    const products = replaceItemProdForSale(selection, productsForSale);

    dispatch(setProductsForSale(products));
  }

  const handleCheckIn = (rowId) => {
    history.push('reports');

    
  } 

  const handleFocus = (e) => e.target.select();
  

  return (
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
                    ? attrib.isCellVisible(key) && <input key={values.id} 
                                                          autoFocus={true}
                                                          onBlur={() => onEdit('id', values.id, Number(value))}
                                                          onFocus={handleFocus}
                                                          value={qty}
                                                          onChange={(e) => setQty(Number(e.target.value))}
                                                          onKeyPress={(e) => handleKeyPress(values.id, Number(e.target.value), e.key)}
                      />
                    : attrib.isCellVisible(key) && 
                      <td key={key}
                          className={attrib.getCellClass(key)}
                          onClick={() => onEdit(key, values.id, Number(value))}
                      >
                          {attrib.getCellValue(key, value)}
                      </td>
                ))
              }
              <ActionButtom type='up' row={values.id} handleClick={handleUpBtnClick} />
              <ActionButtom type='down' row={values.id} handleClick={handleDownBtnClick} />
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
          <ActionButtom type='edit' row={5} handleClick={handleCheckIn}/>
        </tr>
      </tfoot>
    </table>
  )
}
