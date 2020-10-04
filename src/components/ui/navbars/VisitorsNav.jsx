import React from 'react'
import { AuthButtons } from '../AuthButtons';
import { LogoutButton } from '../LogoutButton';
import { QuoteOption } from '../QuoteOption';
import { GralItems } from './GralItems';
import './navbar-styles.scss';

export const VisitorsNav = () => {

    const role = Number(localStorage.getItem('role'));
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    let isAuth = false;
    
    if (isLoggedIn && role === 1) {
        isAuth = true;
    }
    
    
    return (
        <div className="navbar-items collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target="#navbarSupportedContent.show">
            <ul>
                <GralItems/>
                {(isAuth) && <QuoteOption/>}
            </ul>
            { (isAuth) ? <LogoutButton/> :  <AuthButtons/> } 
        </div>
    )
}