import React from 'react'
import { Link } from 'react-router-dom';
// import { VisitorsRouter } from '../../../routers/VisitorsRouter';
import { AuthButtons } from '../AuthButtons';
import './navbar-styles.scss';

export const VisitorsNav = () => {

    const role = localStorage.getItem('role');
    let isAuth = false;

    if (role === '0') {
        isAuth = true;
    }


    return (
        <div className="navbar-items collapse navbar-collapse" id="navbarSupportedContent">
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
                        (isAuth) && <Link to="/quote" className="nav-link"><span className="navbar-item">Nosotros</span></Link>
                    }
                </li>
            </ul>
            <AuthButtons/>
        </div>
    )
}