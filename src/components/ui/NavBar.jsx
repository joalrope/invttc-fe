import React from 'react';
import { AuthButtons } from './AuthButtons';
import { LogoutButton } from './LogoutButton';
import { GetItems } from './GetItems';
import '../../assets/css/navbar.scss';

const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

export const NavBar = () => {


    return (
        <nav className="navbar navbar-expand-sm navbar-light navbar-app">
            <div className="navbar-brand navbar-logo">
                <img src="/logo.png" height="80" alt="logo de TractoCenter"/>
            </div>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-items collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target="#navbarSupportedContent.show">
                <ul className="navbar-nav">
                    <GetItems/>
                </ul>
                { (isLoggedIn) ? <LogoutButton/> :  <AuthButtons/> }
            </div>
        </nav>
    )
}
