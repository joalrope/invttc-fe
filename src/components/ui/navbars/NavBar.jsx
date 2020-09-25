import React from 'react'
import { UsersNav } from './UsersNav';
// import { useDispatch, useSelector } from 'react-redux';
// import { startHideLogin, startHideRegister, startLogout, startShowLogin, startShowRegister } from '../../actions/auth';
import './styles.css';
import { VisitorsNav } from './VisitorsNav';



export const NavBar = () => {

    // const dispatch = u`seDispatch();
    


    // const {name} = useSelector(state => state.auth);
    const name = localStorage.getItem('name');

    return (
        <div>
            { (name) ? <UsersNav/> : <VisitorsNav/> }    
        </div>
    )
}
