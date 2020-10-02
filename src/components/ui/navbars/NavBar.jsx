import React from 'react';
import { UsersNav } from './UsersNav';
import { VisitorsNav } from './VisitorsNav';
import './navbar-styles.scss';


export const NavBar = () => {

    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    const role = Number(localStorage.getItem('role'));


    return (
        <nav className="navbar navbar-expand-sm navbar-light navbar-app">
            <div className="navbar-brand navbar-logo">
                <img src="/logo.png" height="80" alt="logo de TractoCenter"/>
            </div>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            { (isLoggedIn && role >= 2) ? <UsersNav/> : <VisitorsNav/> } 

        </nav>
    )
}
