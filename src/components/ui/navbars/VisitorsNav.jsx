import React from 'react'
import { Link } from 'react-router-dom';
// import { VisitorsRouter } from '../../../routers/VisitorsRouter';
import { LoginForm } from '../../auth/LoginForm';
import { RegisterForm } from '../../auth/RegisterForm';
import { AuthButtons } from '../AuthButtons';
import './navbar.css';

export const VisitorsNav = () => {

    const role = localStorage.getItem('role');
    let isAuth = false;

    if (role === '0') {
        isAuth = true;
    }
    const loginVisible= false;
    const RegisterVisible = false;

    return (
        <div>

            {(loginVisible) && <LoginForm/>}
            {(RegisterVisible) && <RegisterForm/>}

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/home" className="nav-link"><span className="nav-bar-item">Inicio</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/rental" className="nav-link"><span className="nav-bar-item">Alquiler</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/cantact" className="nav-link"><span className="nav-bar-item">Contacto</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link"><span className="nav-bar-item">Nosotros</span></Link>
                </li>
                <li className="nav-item">
                    {
                        (isAuth) && <Link to="/quote" className="nav-link"><span className="nav-bar-item">Nosotros</span></Link>
                    }
                </li>
                <AuthButtons/>
            </ul>
            {/* <VisitorsRouter/> */}
        </div>
    )
}