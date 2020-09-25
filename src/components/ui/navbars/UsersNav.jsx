import React from 'react'
import { Link } from 'react-router-dom';
import { UsersRouter } from '../../../routers/UsersRouter';
import { BrandNav } from '../BrandNav';
import { LogoutButton } from '../LogoutButton';

export const UsersNav = () => {


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3">
                <BrandNav/>
                <div className="navbar-options">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/app/sales" className="nav-link">Ventas<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/app/inventory" className="nav-link">Inventario</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/app/admin" className="nav-link">Administrativo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/app/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/app/service" className="nav-link">Servicio</Link>
                        </li>
                    </ul>
                <LogoutButton/>
                </div>
            </nav>
            <UsersRouter/>
        </div>
    )
}