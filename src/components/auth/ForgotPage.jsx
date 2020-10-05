import React from 'react';
import { useHistory } from 'react-router-dom';

import '../../assets/css/auth.scss';


export const ForgotPage = () => {

    const history = useHistory();

    const goBack = () => {
        (history.length>=1) ? history.goBack() : history.push("/");
    } 

    const handleSubmit = () => {
        alert('Submit')
    }


    return (
        <>
            <div className="body login-img"></div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="forgot">
                        <button className="close" onClick={goBack} >
                            <i className='far fa-times-circle'></i>
                        </button> 
                        <div className="card-header">
                            <h3>Recuperar contraseña</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Nombre de usuario"/>
                                </div>
                                <div className="form-group d-flex justify-content-end">
                                    <input type="submit" value="Ingresar" className="btn submit-btn"/>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}