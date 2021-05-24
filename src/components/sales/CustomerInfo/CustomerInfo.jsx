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
import { RadioInput } from '../../controls/RadioInput/RadioInput';

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

  // const handleCreditClick = (numDays) => {
  //   customer['paymentConditions'] = `Venta a credito ${numDays} días`;
  //   dispatch(customerSetActive(customer));
  //   setCreditDays(numDays);
  // };

  const handleOnClick = () => {
    customer['paymentConditions'] = 'Venta a contado';
    dispatch(customerSetActive(customer));
    setIsSaleOnCredit(document.getElementById('creditSaleCheck').checked);
  };

  const handleOnChange = (value) => {
    console.log(Number(value));
    customer['paymentConditions'] = `Venta a credito ${value} días`;
    dispatch(customerSetActive(customer));
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
      {isRegularCustomer && (
        <div className='sale-mode'>
          <div className='form-check'>
            <input type='checkbox' className='form-check-input' id='creditSaleCheck' onClick={handleOnClick} />
            <label className='form-check-label' htmlFor='creditSaleCheck'>
              Venta a Crédito
            </label>
          </div>
          {isSaleOnCredit && (
            <fieldset className='options'>
              <legend className='legend-days'>Plazo en días</legend>
              <RadioInput
                label={'7'}
                value={'7'}
                checked={creditDays}
                setter={setCreditDays}
                handleOnChange={handleOnChange}
              />
              <RadioInput
                label={'15'}
                value={'15'}
                checked={creditDays}
                setter={setCreditDays}
                handleOnChange={handleOnChange}
              />
              <RadioInput
                label={'30'}
                value={'30'}
                checked={creditDays}
                setter={setCreditDays}
                handleOnChange={handleOnChange}
              />
            </fieldset>
          )}
        </div>
      )}
    </div>
  );
};
