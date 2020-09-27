import React from 'react'
import { Link } from 'react-router-dom';
import { UsersRouter } from '../../../routers/UsersRouter';
import { LogoutButton } from '../LogoutButton';
import './navbar.css';

export const UsersNav = () => {


    return (
        <div>
            <ul classNaame="navbar-nav">
                <li classNaame="nav-item">
                    <Link to="/app/sales" classNaame="nav-link"><span classNaame="nav-bar-item">Ventas</span></Link>
                </li>
                <li classNaame="nav-item">
                    <Link to="/app/inventory" classNaame="nav-link"><span classNaame="nav-bar-item">Inventario</span></Link>
                </li>
                <li classNaame="nav-item">
                    <Link to="/app/admin" classNaame="nav-link"><span classNaame="nav-bar-item">Administrativo</span></Link>
                </li>
                <li classNaame="nav-item">
                    <Link to="/app/dashboard" classNaame="nav-link"><span classNaame="nav-bar-item">Dashboard</span></Link>
                </li>
                <li classNaame="nav-item">
                    <Link to="/app/servuice" classNaame="nav-link"><span classNaame="nav-bar-item">Servicio</span></Link>
                </li>
                <LogoutButton/>
            </ul>
            <UsersRouter/>
        </div>
    )
}