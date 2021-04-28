import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Swal from 'sweetalert2';
import { CustomerInfo } from '../../sales/CustomerInfo/CustomerInfo';
import { Invoice } from '../../templates/invoice/Invoice';
import { GeneratePdfFromHtml } from '../../HOC/GeneratePdfFromHtml';
import { ProductInfo } from '../../sales/ProductInfo/ProductInfo';
import { ProductsForSale } from '../../sales/ProductForSale/ProductsForSale';
import { SearchClient } from '../../sales/SearchClient';
import { SearchProduct } from '../../sales/SearchProduct';
import { fetchWithToken } from '../../../helpers/fetch';
import '../../../assets/css/sales.scss';

export const SalesPage = () => {
  const { activeProduct } = useSelector((state) => state.product);
  const { activeCustomer } = useSelector((state) => state.customer);
  const { productsForSale } = useSelector((state) => state.product);
  const { showInvoicePdf } = useSelector((state) => state.reports);
  const [controlNumber, setControlNumber] = useState(null);
  const [ivaTax, setIvaTax] = useState(0);
  const purchaseTotal = productsForSale.reduce((grandTotal, { total }) => Number(grandTotal) + Number(total), 0);
  const ivaTaxAmount = purchaseTotal * ivaTax;
  const invoiceTotal = purchaseTotal + ivaTaxAmount;
  const urlLastTransaction = '/transaction/lastTransaction';
  const urlNextTransaction = '/transaction/nextTransaction';

  const getTransactionInfo = async () => {
    const { result } = await fetchWithToken(urlLastTransaction);
    setControlNumber(result.nextNumberTransaction);
    setIvaTax(result.ivaTax);
  };

  useEffect(() => {
    getTransactionInfo();
  }, [showInvoicePdf]);

  const transactionData = {
    date: moment().format('DD/MM/YYYY'),
    controlNumber,
    deliveryMode: true,
  };

  const totals = {
    purchaseTotal,
    ivaTaxAmount,
    invoiceTotal,
  };

  const msgWhenUnmounting = () => {
    Swal.fire({
      title: `¿Se generó correctamente la nota de entrega ${controlNumber}?`,
      icon: 'question',
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetchWithToken(urlNextTransaction, {}, 'PATCH');

        window.location.reload();
      } else {
        result.isConfirmed = false;
      }
    });
  };

  return (
    <div className='container mt-5'>
      <div className='search-container'>
        {showInvoicePdf && (
          <GeneratePdfFromHtml
            WrappedComponent={Invoice}
            data={{ transactionData, activeCustomer, productsForSale, totals }}
            msgWhenUnmounting={msgWhenUnmounting}
          />
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
