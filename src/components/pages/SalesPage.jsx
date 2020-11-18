import React from 'react';
// import { ClientInfo } from '../sales/ClientInfo';
import { ProductInfo } from '../sales/ProductInfo';
import { SearchCode } from '../sales/SearchCode';
import '../../assets/css/sales.scss';

export const SalesPage = () => {
    return (
        <div className="container mt-5">
            <SearchCode/>
            {/* <ClientInfo/> */}
            <ProductInfo/>
        </div>
    )
}
