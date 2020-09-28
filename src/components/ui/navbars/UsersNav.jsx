import React from 'react'
import { Link } from 'react-router-dom';
// import { UsersRouter } from '../../../routers/UsersRouter';
import { LogoutButton } from '../LogoutButton';
import './navbar.css';

export const UsersNav = () => {


    return (
        <div  className="navbar-items collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/app/sales" className="nav-link"><span className="navbar-item">Ventas</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/inventory" className="nav-link"><span className="navbar-item">Inventario</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/admin" className="nav-link"><span className="navbar-item">Administrativo</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/dashboard" className="nav-link"><span className="navbar-item">Dashboard</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/service" className="nav-link"><span className="navbar-item">Servicio</span></Link>
                </li>
                <Link to="/404"/>
            </ul>
            <LogoutButton/>
            {/* <UsersRouter/> */}
        </div>
    )
}