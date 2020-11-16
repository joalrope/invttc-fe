import React from 'react';
import '../../assets/css/listproducts.scss'



export const ListProducts = (products) => {
    return (
        <div className="product-container">
            <div className="product-code">{products.code}</div>
            <div className="product-title">{products.title}</div>
        </div>
    )
}
