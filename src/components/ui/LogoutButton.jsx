import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { customerClearActive } from '../../actions/customers';
import { clearActivePoduct, setProductsForSale } from '../../actions/products';

export const LogoutButton = () => {
  const { name } = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(setProductsForSale([]));
    dispatch(customerClearActive());
    dispatch(clearActivePoduct());
    dispatch(startLogout());
    history.push('/');
  };

  return (
    <div className='navbar-buttons'>
      <nav className='navbar-user-name'>
        <span className='navbar-brand-user-name'>{name}</span>
      </nav>

      <button className='btn' onClick={handleLogout}>
        <i className='fas fa-sign-out-alt '></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
