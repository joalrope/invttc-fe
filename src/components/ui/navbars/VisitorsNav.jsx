import React from 'react'
import { Link } from 'react-router-dom';
import { VisitorsRouter } from '../../../routers/VisitorsRouter';
import { AuthButtons } from '../AuthButtons';
import { BrandNav } from '../BrandNav';
import { QuoteOption } from '../QuoteOption';

export const VisitorsNav = () => {

    const role = localStorage.getItem('role');
    let isAuth = false;

    if (role === '0') {
        isAuth = true;
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="navbar-options">
                    <ul className="navbar-nav">
                        <BrandNav/>
                        <div className="navbar-items">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/rental" className="nav-link">Alquiler de Equipos</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">Nosotros</Link>
                            </li>
                            {(isAuth) && <QuoteOption/>}
                        </div>
                        <AuthButtons/>
                    </ul>
                </div>
            </nav>
           
            <VisitorsRouter/>

        </div>
        
    )
}