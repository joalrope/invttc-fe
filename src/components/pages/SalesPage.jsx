import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { CustomerInfo } from '../sales/CustomerInfo/CustomerInfo';
import { Invoice } from '../templates/invoice/Invoice';
import { GeneratePdfFromHtml } from '../HOC/GeneratePdfFromHtml';
import { ProductInfo } from '../sales/ProductInfo/ProductInfo';
import { ProductsForSale } from '../sales/ProductForSale/ProductsForSale';
import { SearchClient } from '../sales/SearchClient';
import { SearchProduct } from '../sales/SearchProduct';
import '../../assets/css/sales.scss';

const transactionData = {
  date: moment().format('DD/MM/YYYY'),
  controlNumber: '2102-05',
  deliveryMode: true,
};

export const SalesPage = () => {
  const { activeProduct } = useSelector((state) => state.product);
  const { activeCustomer } = useSelector((state) => state.customer);
  const { productsForSale } = useSelector((state) => state.product);
  const { showInvoicePdf } = useSelector((state) => state.reports);

  return (
    <div className='container mt-5'>
      <div className='search-container'>
        {showInvoicePdf && (
          <GeneratePdfFromHtml Component={Invoice} data={{ transactionData, activeCustomer, productsForSale }} />
        )}
        <SearchClient />
        <SearchProduct />
      </div>
      {activeCustomer && <CustomerInfo customer={activeCustomer} />}
      {activeProduct && <ProductInfo product={activeProduct} />}
      {productsForSale.length > 0 && <ProductsForSale products={productsForSale} />}
    </div>
  );
};
