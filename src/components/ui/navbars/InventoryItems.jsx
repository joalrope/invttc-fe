import React from 'react';
import { Link } from 'react-router-dom';

export const InventoryItems = () => {
    return (
        <div className="navbar-nav">
            <li className="nav-item">
                <Link to="/app/inventory" className="nav-link"><span className="navbar-item">Inventario</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/app/prod-load" className="nav-link"><span className="navbar-item">Cargas</span></Link>
            </li>
            <li className="nav-item">
                <Link to="/app/check" className="nav-link"><span className="navbar-item">Revision</span></Link>
            </li>
        </div>
    )
}
