import React from 'react';
import { Link } from 'react-router-dom';
import items from '../../assets/data/navbar.json';

const role = Number(localStorage.getItem('role'));
    
export const GetItems = () => {

    return (
        <div className="navbar-nav">
            {items.filter(item => item.role === role).map(filtreredRole => (
                <li key={filtreredRole.id} className="nav-item">
                    <Link to={filtreredRole.to} className="nav-link"><span className="navbar-item">{filtreredRole.title}</span></Link>
                </li>
            ))}
        </div>
    )
}
