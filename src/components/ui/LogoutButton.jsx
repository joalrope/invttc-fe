import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const LogoutButton = () => {

    const dispatch = useDispatch();
    const {name} = useSelector(state => state.auth);  
    const handleLogout = () => {
        dispatch(startLogout());
    }

    
    return (
        <div className="navbar-buttons">
            <nav className="navbar-user-name">
                <span className="navbar-brand-user-name">{name}</span>
            </nav>

            <button className="btn" onClick={handleLogout}>
                <i className='fas fa-sign-out-alt '></i>
                <span> Salir</span>
            </button>
        </div>
    )
}
