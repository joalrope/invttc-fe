import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './auth-styles.scss';



export const LoginPage = () => {

    const history = useHistory();

    const goBack = () => {
        (history.length>=1) ? history.goBack() : history.push("/");
    }

    const handleSubmit = () => {
        localStorage.setItem('name', 'Administrador');
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', 4);
        goBack();    
    }
    
    const handleLoginFacebk = () => {
        localStorage.setItem('name', 'Visitante autorizado');
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', 1); 
        goBack();    
    }
    
    const handleLoginGoogle = () => {
        localStorage.setItem('name', 'Almacenista');
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', 2); 
        goBack();    
    }
    
    const handleLoginTwittr = () => {
        localStorage.setItem('name', 'Vendedor');
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('role', 3); 
        goBack();    
    }


    return (
        <>
            <div className="body login-img"></div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="login">
                        <button className="close" onClick={goBack} >
                            <i className='far fa-times-circle'></i>
                        </button> 
                        <div className="card-header">
                            <h3>Ingresar</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nombre de usuario"/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password"/>
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox"/>Recordarme
                                </div>
                                <div className="form-group d-flex justify-content-end">
                                    <input type="submit" value="Ingresar" className="btn submit-btn"/>
                                </div>
                                <div className="d-flex justify-content-end social_icon">
                                    <span><i onClick={handleLoginFacebk} className="fab fa-facebook-square"></i></span>
                                    <span><i onClick={handleLoginGoogle} className="fab fa-google-plus-square"></i></span>
                                    <span><i onClick={handleLoginTwittr} className="fab fa-twitter-square"></i></span>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-end links">
                                ¿No tiene una cuenta?<Link to="/register">Registrese</Link>
                            </div>
                            <div className="d-flex justify-content-end links">
                                <Link to="/forgot">Olvidó su contraseña?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}