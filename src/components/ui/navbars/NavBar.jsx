import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { startHideLogin, startHideRegister, startLogout, startShowLogin, startShowRegister } from '../../actions/auth';
import { UsersNav } from './UsersNav';
import { VisitorsNav } from './VisitorsNav';
import { LogoutButton } from '../LogoutButton';
import { AuthButtons } from '../AuthButtons';
import { UsersRouter } from '../../../routers/UsersRouter';
import { VisitorsRouter } from '../../../routers/VisitorsRouter';
import './navbar.css';


export const NavBar = () => {

    // const dispatch = u`seDispatch();

    // const {name} = useSelector(state => state.auth);
    const name = localStorage.getItem('name');

    return (
        <>
            <nav classNaame="navbar navbar-expand-sm navbar-light navbar-app">
                <div classNaame="navbar-logo">
                    <div classNaame="navbar-brand">
                        <img src='logo.png' height="80" alt="logo de TractoCenter"/>
                    </div>
                </div>
            
                <button classNaame="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span classNaame="navbar-toggler-icon"></span>
                </button>

                <div classNaame="collapse navbar-collapse navbar-items" id="navbarSupportedContent">
                    { (name) ? <UsersNav/> : <VisitorsNav/> } 
                    { (name) ? <LogoutButton/> : <AuthButtons/> } 
                </div>
            </nav>
           
            <div>
                (name) ? <UsersRouter/> : <VisitorsRouter/>
            </div>
        </>
        

        
    )


}
