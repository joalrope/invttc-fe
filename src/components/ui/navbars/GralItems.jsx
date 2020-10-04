import React from 'react';
import { Link } from 'react-router-dom';

export const GralItems = () => {
    return (
        <div className="navbar-nav">
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
        </div>
    )
}
