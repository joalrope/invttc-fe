import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { clearPoductStore } from '../../actions/products';

export const LogoutButton = () => {

  const dispatch = useDispatch();
  const {name} = useSelector(state => state.auth);  
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear()
    history.push('/');
    dispatch(clearPoductStore())
    dispatch(startLogout());
  }


  return (
    <div className="navbar-buttons">
      <nav className="navbar-user-name">
        <span className="navbar-brand-user-name">{name}</span>
      </nav>

      <button className="btn" onClick={handleLogout}>
        <i className='fas fa-sign-out-alt '></i>
        <span>Salir</span>
      </button>
    </div>
  )
}
