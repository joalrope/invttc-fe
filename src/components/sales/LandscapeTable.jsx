import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { getSelectedProduct } from '../../helpers/sales/add-products-for-sale'
import { addProductForSale, setProductsForSale } from '../../actions/products'
import {TableAttrib} from '../../helpers/sales/table-attrib-class'
import {columns} from '../../assets/data/json-to-html-table'
import {parseJwt} from '../../helpers/parse-jwt'
import { replaceItemProdForSale } from '../../helpers/sales/sales-utils'

export const LandscapeTable = ({data}) => {
  const dispatch = useDispatch();
  const {activeProduct, productsForSale} = useSelector(state => state.product)
  const attrib = new TableAttrib(columns)
  const role = parseJwt()

  const selectedIndex = (code, trademark) => productsForSale.findIndex(item =>  item.code === code &&
                                                                                item.trademark === trademark )                                                                             

  const handleClick = (key, brand) => {
    
    if (key === 'trademark') {
      const selectedProduct = getSelectedProduct(brand, activeProduct)
      const {code, trademark} = selectedProduct
      const isLoadedProduct = productsForSale.some(product => product.code === code &&
                                                              product.trademark === trademark)

      if (isLoadedProduct) {
        Swal.fire({
            title: 'Desea sumarlo al anterior?',
            html: `El Producto con codigo: <b> ${code} </b>de la marca <b>${trademark}</b> ya esta agregado`,
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Si!',
            denyButtonText: '<i class="fa fa-thumbs-down"></i> No!',
          }).then((result) => {
            if (result.isConfirmed) {              
              const index = selectedIndex(code, trademark)
              const prodForSaleSel = productsForSale[index]
              let qtyLoaded 

              productsForSale.some(product => {
                if (product.code === code && product.trademark === trademark) {
                  qtyLoaded = Number(product.qty)
                }
                return null
              })

              prodForSaleSel['qty'] = Number(qtyLoaded) + 1
              prodForSaleSel['total'] = Number( prodForSaleSel['qty']) * Number(prodForSaleSel['salePrice'])

              const products = replaceItemProdForSale(prodForSaleSel, productsForSale)

              dispatch(setProductsForSale(products))  
            }
          })
      } else {
        dispatch(addProductForSale(selectedProduct))
      }
    }
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
