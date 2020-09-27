import React from 'react'
import { Link } from 'react-router-dom';
import { VisitorsRouter } from '../../../routers/VisitorsRouter';
import { AuthButtons } from '../AuthButtons';
import './navbar.css';

export const VisitorsNav = () => {

    const role = localStorage.getItem('role');
    let isAuth = false;

    if (role === '0') {
        isAuth = true;
    }


    return (
        <div>
            <ul classNaame="navbar-nav">
                <li classNaame="nav-item">
                    <Link to="/home" classNaame="nav-link"><span classNaame="nav-bar-item">Inicio</span></Link>
                </li>
                <li classNaame="nav-item">
                    <Link to="/rental" classNaame="nav-link"><span classNaame="nav-bar-item">Alquiler</span></Link>
                </li>
                <li classNaame="nav-item">
                    <Link to="/cantact" classNaame="nav-link"><span classNaame="nav-bar-item">Contacto</span></Link>
                </li>
                <li classNaame="nav-item">
                    <Link to="/about" classNaame="nav-link"><span classNaame="nav-bar-item">Nosotros</span></Link>
                </li>
                <li classNaame="nav-item">
                    {
                        (isAuth) && <Link to="/quote" classNaame="nav-link"><span classNaame="nav-bar-item">Nosotros</span></Link>
                    }
                </li>
                <AuthButtons/>
            </ul>
            <VisitorsRouter/>
        </div>
    )
}