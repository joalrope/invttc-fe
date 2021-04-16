import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsForSale } from '../sales/ProductForSale/ProductsForSale';
import { SearchClient } from '../sales/SearchClient';
import { ProductInfo } from '../sales/ProductInfo/ProductInfo';
import { CustomerInfo } from '../sales/CustomerInfo/CustomerInfo';
import { SearchProduct } from '../sales/SearchProduct';
import '../../assets/css/sales.scss';

export const SalesPage = () => {
  const { activeProduct } = useSelector((state) => state.product);
  const { activeCustomer } = useSelector((state) => state.customer);
  const { productsForSale } = useSelector((state) => state.product);

  return (
    <div className='container mt-5'>
      <div className='search-container'>
        <SearchClient />
        <SearchProduct />
      </div>
      {activeCustomer && <CustomerInfo customer={activeCustomer} />}
      {activeProduct && <ProductInfo product={activeProduct} />}
      {productsForSale.length > 0 && <ProductsForSale products={productsForSale} />}
    </div>
  );
};
