import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { InvoiceHeader } from './InvoiceHeader';
import { InvoiceFooter } from './InvoiceFooter';
import { InvoiceBody } from './InvoiceBody';
import './invoice.scss';

const transactionData = {
  date: moment().format('DD/MM/YYYY'),
  controlNumber: '2102-05',
  deliveryMode: true,
};

export const Invoice = () => {
  const { productsForSale } = useSelector((state) => state.product);
  const { activeCustomer } = useSelector((state) => state.customer);
  let clonedProducts = JSON.parse(JSON.stringify(productsForSale));
  let clonedCustomer = JSON.parse(JSON.stringify(activeCustomer));
  let i = 0;

  clonedCustomer['paymentConditions'] = 'Pago de Contado';

  const products = clonedProducts.map((product) => {
    i++;
    return {
      id: product.id,
      item: `0${i}`,
      code: product.code,
      title: product.title,
      qty: product.qty,
      salePrice: product.salePrice,
      total: product.total,
    };
  });

  if (products.length < 11) {
    i = products.length;
    while (i < 9) {
      i++;
      products[i] = {
        id: i,
        item: i < 10 ? `0${i}` : `${i}`,
        code: '',
        title: '',
        qty: '',
        salePrice: '',
        total: '',
      };
    }
  }

  return (
    <div className='invoice-container'>
      <InvoiceHeader customerData={clonedCustomer} transactionData={transactionData} />
      <InvoiceBody products={products} />
      <InvoiceFooter />
    </div>
  );
};
