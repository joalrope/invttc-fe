import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProductByCode, findProductById, clearProductsLoaded } from '../../actions/products';
import { ListDataFound } from './ListDataFound';
import { useForm } from '../../hooks/userForm';

const columns = [
  ['id', 'id', false],
  ['code', 'Código', true],
  ['title', 'Descripción', true],
];

export const SearchProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  // const {activeProduct} = useSelector(state => state.product);
  const [formValues, handleInputChange, reset] = useForm({ Code: '' });
  const { Code } = formValues;

  const handleClick = (rowData) => {
    const { id } = JSON.parse(JSON.stringify(rowData));
    dispatch(findProductById(id));
    dispatch(clearProductsLoaded());
    reset();
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(findProductByCode(Code));

      if (!!products[0]) {
        const { id } = products[0];
        if (!!id) {
          dispatch(findProductById(id));
          reset();
        }
      }
    }
  };

  useEffect(() => {
    dispatch(findProductByCode(Code.toUpperCase()));
  }, [dispatch, Code]);

  return (
    <div className='search-code'>
      <h5 className='search-code-title'>Buscar Producto</h5>
      <div className='input-group form-group group-input-search-code input-search-code'>
        <div className='input-group-prepend'>
          <span className='input-group-text input-code-span-text'>Código</span>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='Código'
          name='Code'
          autoComplete='off'
          value={Code}
          onChange={handleInputChange}
          // onFocus={handleInputFocus}
          onKeyPress={handleOnKeyPress}
        />
      </div>
      {products.length > 0 && (
        <div className='input-search-code'>
          <ListDataFound data={products} hasHeader={true} columns={columns} handleClick={handleClick} />
        </div>
      )}
    </div>
  );
};
