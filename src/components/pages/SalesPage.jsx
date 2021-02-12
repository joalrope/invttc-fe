import React from 'react';
import { ClientInfo } from '../sales/ClientInfo';
import { ProductInfo } from '../sales/ProductInfo';
import { SearchCode } from '../sales/SearchCode';
import { ProductsForSale } from '../sales/ProductsForSale';
import '../../assets/css/sales.scss';
import { useSelector } from 'react-redux';

export const SalesPage = () => {
  const {activeProduct} = useSelector(state => state.product);
  const {productsForSale} = useSelector(state => state.product);

  return (
    <div className="container mt-5">
      <ClientInfo/>
      <SearchCode/>
      {(activeProduct !== null) && <ProductInfo product={activeProduct}/>}
      {(productsForSale.length > 0) && <ProductsForSale products={productsForSale}/>}
    </div>
  )
}
