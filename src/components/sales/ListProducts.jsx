import React from 'react';
import { useSelector } from 'react-redux';



export const ListProducts = ({onClick}) => {

    const {products} = useSelector(state => state.product);

    
    return (
        <table className="found-products-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (
                        <tr key={product.id} onClick={() => onClick(product)}>
                            <td>{product.code}</td>
                            <td>{product.title}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
