import React from 'react'
import { Link } from 'react-router-dom';
import { AuthButtons } from '../AuthButtons';
import { LogoutButton } from '../LogoutButton';
import './navbar-styles.scss';

export const VisitorsNav = () => {

    const role = Number(localStorage.getItem('role'));
    const isLoggedIn = JSON.stringify(localStorage.getItem('isLoggedIn'));
    let isAuth = false;
    
    if (isLoggedIn && role === 1) {
        isAuth = true;
    }
    
    
    return (
        <div className="navbar-items collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target="#navbarSupportedContent.show">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link"><span className="navbar-item">Inicio</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/rental" className="nav-link"><span className="navbar-item">Alquiler</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link"><span className="navbar-item">Contacto</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link"><span className="navbar-item">Nosotros</span></Link>
                </li>
                <li className="nav-item">
                    {
                        (isAuth) && <Link to="/quote" className="nav-link"><span className="navbar-item">Cotizacion</span></Link>
                    }
                </li>
            </ul>

            { (isAuth) ? <LogoutButton/> :  <AuthButtons/> } 
        </div>
    )
}