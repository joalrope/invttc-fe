import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CustomerInfo } from '../../sales/CustomerInfo/CustomerInfo';
import { Invoice } from '../../templates/invoice/Invoice';
import { GeneratePdfFromHtml } from '../../HOC/GeneratePdfFromHtml';
import { ProductsForSale } from '../../sales/ProductForSale/ProductsForSale';
import { getTransactionInfo } from './controllers/getTransactionInfo';
import { getTotals } from './controllers/totals';
import { msgWhenUnmounting } from './controllers/pdfRenderResult';
import { controlNumber, ivaTax } from './controllers/getTransactionInfo';
import '../../../assets/css/sales.scss';

export const SalesPage = () => {
  const { productsForSale } = useSelector((state) => state.product);
  const { showInvoicePdf } = useSelector((state) => state.reports);

  useEffect(() => {
    getTransactionInfo();
  }, []);

  const data = getTotals(controlNumber, ivaTax);

  return (
    <div className='container mt-5'>
      <div className='search'>
        {showInvoicePdf && (
          <GeneratePdfFromHtml WrappedComponent={Invoice} data={data} msgWhenUnmounting={msgWhenUnmounting} />
        )}
      </div>
      <CustomerInfo />
      {productsForSale.length > 0 && <ProductsForSale products={productsForSale} tax={ivaTax} />}
    </div>
  );
};
