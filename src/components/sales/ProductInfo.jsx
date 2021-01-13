/* eslint-disable array-callback-return */
import React from 'react'
// import {useSelector} from 'react-redux'
// import {json2Tabular} from '../../helpers/jsonTab/json2Tabular'
// import {colData} from '../../assets/data/columns'
import {productTable} from '../../assets/data/productTable'

export const ProductInfo = () => {

    // const {activeProduct: selectedProduct} = useSelector(state => state.product);
    // const data = json2Tabular(selectedProduct, 'portrait')
    const data = productTable

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
                      Object.keys(data[0]).map(value => {
                        return (<th key={value}>{value}</th> )
                      })
                    }
                    </tr>
                  </thead>
                  <tbody>
                      {
                        data.map((value, label) => (
                          <tr key={label}>
                            {Object.values(value).map(cell => (
                              <td key={cell} rowSpan={cell[1]}>{cell[0]}</td>
                            ))}
                          </tr>
                        ))
                      }
                  </tbody>
                </table>
              </div>
            
        </div>
    )
}
