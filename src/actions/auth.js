import Swal from 'sweetalert2';
import { types } from '../types/types';
import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch"
import { eventLogout } from './events';


export const startLogin = (email, password) => { 

    return async (dispatch) => {
            
        const resp = await fetchWithoutToken('/auth', {email, password}, 'POST');
        const {ok, msg, token, uid, name} = await resp.json();

        if (ok) {
            
            dispatch(login({
                uid,
                name
            }));
            
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('name', name);
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

        } else {
            Swal.fire('Error', msg, 'error');
        }
    }
}


export const startRegister = (name, email, password) => {

    return async (dispatch) => {
        
        const resp = await fetchWithoutToken('/auth/new', {name, email, password}, 'POST');
        const {ok, msg, token, uid, name: userName} = await resp.json();


        if (ok) {
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid,
                userName
            }));

        } else {
            Swal.fire('Error', msg, 'error');
        }
    }
}


export const startPassRecovery = (email) => {

    
}


export const startChecking = () => {
    
    return async (dispatch) => {
        
        if ('token' in localStorage) {
        
            const resp = await fetchWithToken('/auth/renew');
            const {ok, token, uid, name} = await resp.json();
    
            if (ok) {
                localStorage.setItem('token', token);
                localStorage.setItem('token-init-date', new Date().getTime());
    
                dispatch(login({
                    uid,
                    name
                }));
    
            } else {
                dispatch(checkingFinish());
            }
        }
    }
}


export const startLogout = () => {
    return (dispatch) =>{
        localStorage.clear();
        dispatch(logout());
        dispatch(eventLogout())
    }
}


export const startShowLogin = () => {
    return (dispatch) => {
        dispatch(showLoginForm(true));
    }
}


export const startShowRegister = () => {
    return (dispatch) => {
        dispatch(showRegisterForm(true));
    }
}


export const startShowPassForgot = () => {
    return (dispatch) => {
        dispatch(showPassForgotForm(true));
    }
}


export const startHideLogin = () => {
    
}


export const startHideRegister = () => {
    return (dispatch) => {
        dispatch(showRegisterForm(false));
    }
}


export const startHidePassForgot = () => {
    return (dispatch) => {
        dispatch(showPassForgotForm(false));
    }
}


const login = (user) => ({
    type: types.authlogin,
    payload: user
})


const checkingFinish = () => ({
    type: types.authcheckingFinish
})


const logout = () => ({
    type: types.authlogout
})

const showLoginForm = (valVisible) => ({
    type: types.authShowLogin,
    payload: valVisible
})

const showRegisterForm = (valVisible) => ({
    type: types.authShowRegister,
    payload: valVisible
})

const showPassForgotForm = (valVisible) => ({
    type: types.authShowPassForgot,
    payload: valVisible
})