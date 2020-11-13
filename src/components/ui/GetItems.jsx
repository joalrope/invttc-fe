import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {items} from '../../assets/data/navbarJson';


export const GetItems = () => {
    
    const {role} = useSelector(state => state.auth);
    const {isLoggedIn} = useSelector(state => state.auth);
    console.log(isLoggedIn);


    return (
        <div className="navbar-nav">
            {items.filter(item => item.roles.includes(role)).map(filtreredRole => (
                
                (isLoggedIn) ? 
                    <li key={filtreredRole.id} className="nav-item">
                        <Link to={filtreredRole.to} className="nav-link"><span className="navbar-item">{filtreredRole.title}</span></Link>
                    </li>
                :
                    <li key={filtreredRole.id} className="nav-item">
                        <Link to={filtreredRole.to} className="nav-link"><span className="navbar-item">{filtreredRole.title}</span></Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to={filtreredRole.to} className="dropdown-item"><span className="navbar-item">{filtreredRole.title}</span></Link>
                    </div>
                </li>
            ))}
        </div>
    )
}

