import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerInfo } from '../../sales/CustomerInfo/CustomerInfo';
import { Invoice } from '../../templates/invoice/Invoice';
import { GeneratePdfFromHtml } from '../../wrappers/GeneratePdfFromHtml';
import { ProductsForSale } from '../../sales/ProductForSale/ProductsForSale';
import { getTransactionInfo } from './controllers/getTransactionInfo';
import { getTotals } from './controllers/totals';
import { msgWhenUnmounting } from './controllers/pdfRenderResult';
import { controlNumber, ivaTax } from './controllers/getTransactionInfo';
import { AddCustomerForm } from '../../forms/AddCustomerForm';
import '../../../assets/css/sales.scss';
import { ModalFrame } from '../../wrappers/ModalFrame/ModalFrame';
import { displayAddCustomerForm } from '../../../actions/display';
import { persistCustomer } from './controllers/persist';

export const SalesPage = () => {
  const dispatch = useDispatch();
  const { productsForSale } = useSelector((state) => state.product);
  const { displayInvoicePdf } = useSelector((state) => state.display);
  const { displayAddCustomerFrm } = useSelector((state) => state.display);

  useEffect(() => {
    getTransactionInfo();
  }, []);

  const addCusromerResult = ({ ok, data }) => {
    if (ok) {
      persistCustomer(data);
    }
  };

  const data = getTotals(controlNumber, ivaTax);

  const closeFrm = () => {
    dispatch(displayAddCustomerForm(false));
  };

  return (
    <div className='container mt-5'>
      <div className='search'>
        {displayInvoicePdf && (
          <GeneratePdfFromHtml WrappedComponent={Invoice} data={data} msgWhenUnmounting={msgWhenUnmounting} />
        )}
      </div>
      <ModalFrame
        WrappedComponent={AddCustomerForm}
        title={'Crear Cliente'}
        width={35}
        showFrm={displayAddCustomerFrm}
        closeFrm={closeFrm}
        result={addCusromerResult}
      />
      {/* {displayAddCustomerForm && <AddCustomerForm />} */}
      <CustomerInfo />
      {productsForSale.length > 0 && <ProductsForSale products={productsForSale} tax={ivaTax} />}
    </div>
  );
};
