import React from 'react'
import { useSelector } from 'react-redux'

export const ProductInfo = () => {

    const {activeProduct} = useSelector(state => state.product);

    
    return (
        <div className="mt-5">
            {
                (!!activeProduct) && <div>
                    <h5>Detalle de Producto</h5>
                    <table style={{width:'100%', border: '1px solid grey', borderCollapse: 'collapse', backgroundColor: 'blueviolet'}}>
                        <tr style={{width:'100%', border: '1px solid grey', borderCollapse: 'collapse', backgroundColor: 'grey'}}>
                            <th>Código</th>
                            <th>Decripción</th>
                            <th>Categoría</th>
                            <th>Marca</th>
                            <th>Locación</th>
                            <th>Cantidad</th>
                            <th>Precio de Compra</th>
                            <th>Precio de Venta</th>
                            <th>Condición</th>
                            <th>Equivalencias</th>
                            <th>Medidas</th>
                        </tr>
                        <tr style={{width:'100%', border: '1px solid grey', borderCollapse: 'collapse',}}>
                            <td rowSpan="2">{activeProduct.code}</td>
                            <td rowSpan="2">{activeProduct.title}</td>
                            <td rowSpan="2">{activeProduct.category}</td>
                            <td>{activeProduct.info[0].trademark}</td>
                            <td>{activeProduct.info[0].loc_qty[0].location} </td>
                            <td>{activeProduct.info[0].loc_qty[0].qty} </td>
                            <td>{activeProduct.info[0].costPrice.toFixed(2)}</td>
                            <td>{activeProduct.info[0].salePrice.toFixed(2)}</td>
                            <td rowSpan="2">{activeProduct.info[0].status}</td>
                            <td rowSpan="2">{activeProduct.info[0].replacement}</td>
                            <td rowSpan="2">{activeProduct.info[0].measurement}</td>
                        </tr>
                        {
                            (!!activeProduct.info[1]) && <>
                                <tr>
                                    {/* <td>{activeProduct.code}</td> */}
                                    {/* <td>{activeProduct.title}</td>
                                    <td>{activeProduct.category}</td> */}
                                    <td>{activeProduct.info[1].trademark}</td>
                                    <td>{activeProduct.info[1].loc_qty[0].location} </td>
                                    <td>{activeProduct.info[1].loc_qty[0].qty} </td>
                                    <td>{activeProduct.info[1].costPrice.toFixed(2)}</td>
                                    <td>{activeProduct.info[1].salePrice.toFixed(2)}</td>
                                    {/* <td>{activeProduct.info[0].status}</td>
                                    <td>{activeProduct.info[0].replacement}</td>
                                    <td>{activeProduct.info[0].measurement}</td> */}
                                </tr>
                                
                            </>
                        }
                    </table>
                </div>
        
            }
        </div>
    )
}
