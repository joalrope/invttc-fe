import React from 'react'
import { Link } from 'react-router-dom';
// import { UsersRouter } from '../../../routers/UsersRouter';
import { LogoutButton } from '../LogoutButton';
import './navbar.css';

export const UsersNav = () => {


    return (
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/app/sales" className="nav-link"><span className="nav-bar-item">Ventas</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/inventory" className="nav-link"><span className="nav-bar-item">Inventario</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/admin" className="nav-link"><span className="nav-bar-item">Administrativo</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/dashboard" className="nav-link"><span className="nav-bar-item">Dashboard</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/app/servuice" className="nav-link"><span className="nav-bar-item">Servicio</span></Link>
                </li>
                <LogoutButton/>
            </ul>
            {/* <UsersRouter/> */}
        </div>
    )
}