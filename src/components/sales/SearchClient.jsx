import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListDataFound } from './ListDataFound';
import { useForm } from '../../hooks/userForm';
import { clearCustomersLoaded, findCustomerByCode, findCustomerById } from '../../actions/customers';

const columns = [
  ['id', 'id', false],
  ['code', 'RIF', true],
  ['name', 'Nombre', true],
];

export const SearchClient = () => {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.customer);

  const { activeCustomer } = useSelector((state) => state.customer);
  const [formValues, handleInputChange, reset] = useForm({ Code: '' });
  const { Code } = formValues;

  const handleClick = (rowData) => {
    const { id } = JSON.parse(JSON.stringify(rowData));
    dispatch(findCustomerById(id));
    dispatch(clearCustomersLoaded());
    reset();
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(findCustomerByCode(Code));

      if (!!customers[0]) {
        const { id } = customers[0];
        if (!!id) {
          dispatch(findCustomerById(id));
          if (!!activeCustomer) reset();
        }
      }
    }
  };

  useEffect(() => {
    dispatch(findCustomerByCode(Code.toUpperCase()));
  }, [dispatch, Code]);

  return (
    <div className='search-customer'>
      <h5 className='search-customer-title'>Buscar Cliente</h5>
      <div className='input-group form-group group-input-search-customer input-search-customer'>
        <div className='input-group-prepend'>
          <span className='input-group-text input-customer-span-text'>RIF ó Nombre</span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='RIF ó Nombre'
          name='Code'
          autoComplete='off'
          value={Code}
          onChange={handleInputChange}
          //onFocus={handleInputFocus}
          onKeyPress={handleOnKeyPress}
        />
      </div>
      {customers.length > 0 && (
        <div className='input-search-customer'>
          <ListDataFound data={customers} hasHeader={true} columns={columns} handleClick={handleClick} />
        </div>
      )}
    </div>
  );
};
