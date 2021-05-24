/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { jsonToTabular } from '../../../helpers/jsonTab/json-to-tabular';
// import { useWindowSize } from "../../../hooks/useWindowSize";
import { LandscapeTable } from '../LandscapeTable/LandscapeTable';
import { PortraitTable } from '../PortraitTable';
import { columns } from '../../../assets/data/customer.dataConfig';
import { customerClearActive, customerSetActive } from '../../../actions/customers';
import './customer-info.scss';
import { useDispatch, useSelector } from 'react-redux';

export const CustomerInfo = ({ mode = 'landscape' }) => {
  const dispatch = useDispatch();
  const [isSaleOnCredit, setIsSaleOnCredit] = useState(false);
  const [creditDays, setCreditDays] = useState(0);
  const { activeCustomer: customer } = useSelector((state) => state.customer);
  if (!customer) return null;
  const data = jsonToTabular(customer, mode);
  const { isRegularCustomer } = customer;

  const handleClickDeleteCustomerActive = () => {
    dispatch(customerClearActive());
  };

  const handleCreditClick = (numDays) => {
    customer['paymentConditions'] = `Venta a credito ${numDays} días`;
    dispatch(customerSetActive(customer));
    setCreditDays(numDays);
  };

  const handleSaleMode = () => {
    setCreditDays(0);
    customer['paymentConditions'] = 'Venta a contado';
    dispatch(customerSetActive(customer));
    setIsSaleOnCredit(document.getElementById('creditSaleCheck').checked);
  };

  const actionButtonsCustomerInfo = [{ type: 'delete', handleButtonClick: handleClickDeleteCustomerActive }];

  if (data === null) {
    return <></>;
  }

  return (
    <div className='client-info-container mt-5'>
      <div className='client-info'>
        <h5 className='client-info-title'>Información del Cliente</h5>
        {mode === 'portrait' ? (
          <PortraitTable data={data} columns={columns} actionButtons={actionButtonsCustomerInfo} />
        ) : (
          <LandscapeTable key={data} data={data} columns={columns} actionButtons={actionButtonsCustomerInfo} />
        )}
      </div>
      <div className='sale-mode'>
        {isRegularCustomer && (
          <div>
            <div className='form-check'>
              <input type='checkbox' className='form-check-input' id='creditSaleCheck' onClick={handleSaleMode} />
              <label className='form-check-label' htmlFor='creditSaleCheck'>
                Venta a Crédito{creditDays > 0 && `: ${creditDays} días`}
              </label>
            </div>
            {isSaleOnCredit && creditDays === 0 && (
              <div className='dropdown'>
                <button
                  className='btn btn-outline-warning btn-sm dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Seleccione Días de Credito
                </button>
                <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                  <button className='dropdown-item' onClick={() => handleCreditClick(7)}>
                    7 Días
                  </button>
                  <button className='dropdown-item' onClick={() => handleCreditClick(15)}>
                    15 Días
                  </button>
                  <button className='dropdown-item' onClick={() => handleCreditClick(30)}>
                    30 Días
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
