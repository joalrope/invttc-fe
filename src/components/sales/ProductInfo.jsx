/* eslint-disable array-callback-return */
import React from 'react'
import {useSelector} from 'react-redux'
import {json2Tabular} from '../../helpers/jsonTab/json2Tabular'
// import {colData} from '../../assets/data/columns'

export const ProductInfo = () => {

    const {activeProduct: selectedProduct} = useSelector(state => state.product);
    const data = json2Tabular(selectedProduct, 'portrait')
    
    if (data === null) {
      console.log('null')
        return (<></>)
    }


    return (
        <div className="mt-5">
            
              <div>
                <h5>Detalle de Producto</h5>
                <table className="portrait-table" >
                  <thead>
                    <tr>
                      {
                        data.forEach(element => {

                          element.forEach(item => {
                            return (<th>{item}</th>)
                            
                          })
                            
                        })
                          
                      }
                    </tr>
                  </thead>


                  
                </table>
              </div>
            
        </div>
    )
}
