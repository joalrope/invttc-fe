import React from 'react'
import { useSelector } from 'react-redux'

const headers = [
    {id: 1, name: 'code', title: 'Código'},
    {id: 2, name: 'title', title: 'Decripción'},
    {id: 3, name: 'category', title: 'Categoría'},
    {id: 4, name: 'trademark', title: 'Marca'},
    {id: 5, name: 'location', title: 'Locación'},
    {id: 6, name: 'qty', title: 'Cantidad'},
    {id: 7, name: 'costPrice', title: 'Precio de Compra'},
    {id: 8, name: 'salePrice', title: 'Precio de Venta'},
    {id: 9, name: 'status', title: 'Condición'},
    {id: 10, name: 'replacement', title: 'Equivalencias'},
    {id: 11, name: 'measurement', title: 'Medidas'}
]

export const ProductInfo = () => {

    const {activeProduct} = useSelector(state => state.product);
    const {code, title, category, replacement, measurement, status } = activeProduct || [];

    const rowSpan = 2;


    return (
        <div className="mt-5">
            {
                (!!activeProduct) && <div>
                    <h5>Detalle de Producto</h5>
                    <table className="info-product-table" >
                        <thead>
                            <tr style={{width:'100%', border: '1px solid grey', borderCollapse: 'collapse', backgroundColor: '#f2bd15'}}>
                                {
                                    headers.map( header => (
                                        <th key={header.id}>{header.title}</th>
                                    ))
                                }
                            </tr>
                        </thead>

                        <tbody>
                            <tr style={{width:'100%', border: '1px solid grey', borderCollapse: 'collapse', }}>
                                <td rowSpan={rowSpan}>{code}</td>
                                <td rowSpan={rowSpan}>{title}</td>
                                <td rowSpan={rowSpan}>{category}</td>
                                <td>{activeProduct.info[0].trademark}</td>
                                <td>{activeProduct.info[0].loc_qty[0].location} </td>
                                <td>{activeProduct.info[0].loc_qty[0].qty} </td>
                                <td>{activeProduct.info[0].costPrice.toFixed(2)}</td>
                                <td>{activeProduct.info[0].salePrice.toFixed(2)}</td>
                                <td rowSpan={rowSpan}>{status}</td>
                                <td rowSpan={rowSpan}>{replacement}</td>
                                <td rowSpan={rowSpan}>{measurement}</td>
                            </tr>
                            {
                                (!!activeProduct.info[1]) && <>
                                    <tr style={{width:'100%', border: '1px solid grey', borderCollapse: 'collapse', }}>
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
                        </tbody>
                    </table>
                </div>
        
            }
        </div>
    )
}
