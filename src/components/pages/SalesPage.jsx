import React from 'react';
import { ClientInfo } from '../sales/ClientInfo';
import { ProductInfo } from '../sales/ProductInfo';
import { SearchCode } from '../sales/SearchCode';
import { ProductsForSale } from '../sales/ProductsForSale';
import '../../assets/css/sales.scss';

export const SalesPage = () => {


  return (
    <div className="container mt-5">
      <ClientInfo/>
      <SearchCode/>
      <ProductInfo/>
      <ProductsForSale/>
    </div>
  )
}
