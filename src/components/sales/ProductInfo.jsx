import React from 'react'
import { useSelector } from 'react-redux'

export const ProductInfo = () => {

    const {activeProduct} = useSelector(state => state.product);

    
    return (
        <div className="mt-5">
            <h5>Detalle de Producto</h5>
            {
                (!!activeProduct) && (
                    <div>
                        <p> Código: {activeProduct.code} </p>
                        <p> Descripción: {activeProduct.title} </p>
                        <p> Marca: {activeProduct.info[0].trademark} </p>
                        <p> Tipo: {activeProduct.category} </p>
                        <p> Location: {activeProduct.info[0].loc_qty[0].location} </p>
                        <p> Cantidad: {activeProduct.info[0].loc_qty[0].qty} </p>
                        <p> Precio Costo: {activeProduct.info[0].costPrice.toFixed(2)} </p>
                        <p> Precio Venta: {activeProduct.info[0].salePrice.toFixed(2)} </p>
                        <p> Medidas: {activeProduct.measurement} </p>
                        <p> Equivalente: {activeProduct.replacement} </p>
                    </div>
                )
            }
            
        </div>
    )
}
