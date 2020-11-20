import React from 'react';
import { useSelector } from 'react-redux';



export const ListProducts = ({onClick}) => {

    const {products} = useSelector(state => state.product);

    
    return (
        <table className="found-products-table">
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
