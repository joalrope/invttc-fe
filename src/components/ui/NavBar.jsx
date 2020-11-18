import React from 'react';
import { useSelector } from 'react-redux';
import { AuthButtons } from './AuthButtons';
import { LogoutButton } from './LogoutButton';
import { GetItems } from './GetItems';
import '../../assets/css/navbar.scss';

export const NavBar = () => {
    const {isLoggedIn} = useSelector(state => state.auth);

    return (
        <nav className="navbar navbar-expand-md navbar-light navbar-app">
            <div className="navbar-brand navbar-logo">
                <img src="/logo.png" height="50" alt="logo de TractoCenter"/>
            </div>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-items collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target="#navbarSupportedContent.show">
                <ul className="navbar-nav">
                    <GetItems/>
                </ul>
                { (isLoggedIn ) ? <LogoutButton/> :  <AuthButtons/> }
            </div>
        </nav>
    )
}
