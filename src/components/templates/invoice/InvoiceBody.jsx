import React from 'react';
import { useSelector } from 'react-redux';
import { TableAttrib } from '../../../classes/table-attrib-class'
import { columns } from '../../../assets/data/products-for-sale-table';


export const InvoiceBody = () => {
  const attrib = new TableAttrib(columns)
  const {productsForSale} = useSelector(state => state.product);
  let clonedProducts = JSON.parse(JSON.stringify(productsForSale));
  let i = 0

  const products = clonedProducts.map(product => {
    i++ 
    return {
      "id": product.id,
      "item": `0${i}`,
      "code": product.code,
      "title": product.title,
      "qty": product.qty,
      "salePrice": product.salePrice,
      "total": product.total
    }
  });

  if (products.length < 11) {
    i = products.length
    while (i < 9){
      i++
      products[i] = {
        "id": i,
        "item": (i < 10) ? `0${i}` : `${i}`,
        "code": "",
        "title": "",
        "qty": "",
        "salePrice": "",
        "total": ""
      } 
    }
  } 

  
  return (
    <div className="invoice-body">
      <table className="products-for-sale-table">
        <thead>
            {
              <tr>
                {
                  Object.keys(products[0]).map((key) => (
                    attrib.isCellVisible(key) && <th key={key}>{attrib.getTitleHeader(key)}</th>
                  ))
                }
              </tr>
            }
        </thead>
        <tbody>
          {
            Object.values(products).map((values) => (
              <tr key={values.id}>
                {
                  Object.entries(values).map(([key, value]) => (
                    attrib.isCellVisible(key) && 
                        <td key={key}
                            className={attrib.getCellClass(key)}
                        >
                            {attrib.getCellValue(key, value)}
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
