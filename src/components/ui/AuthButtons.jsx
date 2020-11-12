import React from 'react';
import { Link } from 'react-router-dom';

export const AuthButtons = () => {


    return (
        <div className="navbar-buttons">
            <Link to="/login" className="btn">
                <i className='fas fa-sign-in-alt '></i>
                <span>Ingresar</span>
            </Link>
            <Link to="/register" className="btn" >
            <i className='fas fa-user-plus'></i>
                Registrarse
            </Link>
        </div>            
    )
}
