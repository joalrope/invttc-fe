import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {items} from '../../assets/data/navbarJson';


export const GetItems = () => {
    
    const {role, isLoggedIn} = useSelector(state => state.auth);


    return (
        <div className="navbar-nav">
            {!isLoggedIn && items.filter(item => item.roles === 'all').map(filtreredRole => (
                <li key={filtreredRole.id} className="nav-item">
                    {(filtreredRole.title !== '') && <Link to={filtreredRole.to} className="nav-link"><span className="navbar-item">{filtreredRole.title}</span></Link>}
                </li>
            ))}

            {(isLoggedIn) &&
                <li className="nav-item dropdown">
                    <Link className="dropdown-toggle web-item" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Web
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        {items.filter(item => item.roles === 'all').map(filtreredRole => (
                            <Link to={filtreredRole.to} key={filtreredRole.id} className="dropdown-item">{filtreredRole.title}</Link>
                        ))}
                    </div>
                </li> 
            }

            {(isLoggedIn) && items.filter(item => item.roles.includes(role)).map(filtreredRole => (                
                    <li key={filtreredRole.id} className="nav-item">
                        <Link to={filtreredRole.to} className="nav-link"><span className="navbar-item">{filtreredRole.title}</span></Link>
                    </li>
            ))}
        </div>
       





    )
}

