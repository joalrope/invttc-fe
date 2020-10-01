import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import Swal from 'sweetalert2';
// import { startHideRegister, startRegister, startShowLogin } from '../../actions/auth';
// import { useForm } from '../../hooks/userForm';
import './auth-styles.scss';

export const RegisterPage = () => {

    const history = useHistory()

    const goBack = () => {
        (history.length>=1) ? history.goBack() : history.push("/");
    }
    
    const handleSubmit = () => {
        alert('Submit')
    }


    return (
        <>
            <div className="body register-img"></div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="register">
                        <button className="close" onClick={goBack} >
                            <i className='far fa-times-circle'></i>
                        </button>
                        <div className="card-header">
                            <h3>Registro</h3>
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
                                        <span className="input-group-text"><i className="fas fa-envelope-open-text"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Correo"/>
                                    
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password"/>
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-redo-alt"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="repita password"/>
                                </div>
        
                                <div className="form-group d-flex justify-content-end">
                                    <input type="submit" value="Registrar" className="btn submit-btn"/>
                                </div>
                                <div className="d-flex justify-content-end social_icon">
                                    <span><i className="fab fa-facebook-square"></i></span>
                                    <span><i className="fab fa-google-plus-square"></i></span>
                                    <span><i className="fab fa-twitter-square"></i></span>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-end links">
                                ¿Ya tiene una cuenta?<Link to="/login">Ingrese</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}