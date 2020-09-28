import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { startHideLogin, startHideRegister, startLogout, startShowLogin, startShowRegister } from '../../actions/auth';
import { UsersNav } from './UsersNav';
import { VisitorsNav } from './VisitorsNav';
// import { LogoutButton } from '../LogoutButton';
// import { AuthButtons } from '../AuthButtons';
// import { UsersRouter } from '../../../routers/UsersRouter';
// import { VisitorsRouter } from '../../../routers/VisitorsRouter';
import './navbar.css';


export const NavBar = () => {

    // const dispatch = u`seDispatch();

    // const {name} = useSelector(state => state.auth);
    const name = localStorage.getItem('name');

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light navbar-app">
                <div className="navbar-logo">
                    <div className="navbar-brand">
                        <img src="/logo.png" height="80" alt="logo de TractoCenter"/>
                    </div>
                </div>
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    { (name) ? <UsersNav/> : <VisitorsNav/> } 
                </div>
            </nav>
           
            {/* <div>
                (name) ? <UsersRouter/> : <VisitorsRouter/>
            </div> */}
        </>
    )
}
