/* eslint-disable array-callback-return */
import React from 'react'
import {useSelector} from 'react-redux'
import {json2Tabular} from '../../helpers/jsonTab/json2Tabular'
import {colData} from '../../assets/data/columns'

export const ProductInfo = () => {

    const {activeProduct: selectedProduct} = useSelector(state => state.product);
    const data = json2Tabular(selectedProduct, 'portrait')
    
    if (data === null) {
        return <></>
    }


    return (
        <div className="mt-5">
            {(!!selectedProduct) && <div>
                    <h5>Detalle de Producto</h5>
                    <table className="info-product-table" >
                      {
                        data.map((array) => (
                          array.map((item) => (
                              colData(item[2]).type !== 'noShow' && <tr>
                                <th>
                                  {colData(item[2]).title}
                                </th>
                                <td>
                                  {item[1]}
                                </td>
                              </tr>
                          )
                        ))
                        )
                      }
                    </table>
                </div>
            }
        </div>
    )
}
