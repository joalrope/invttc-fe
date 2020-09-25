import React from 'react'

export const AuthButtons = () => {

    const handleShowLogin = () => {

        localStorage.setItem('name', 'Joalrope')
        
        
    }
    
    const handleShowRegister = () => {
        
        localStorage.setItem('role', 0)
    }


    return (
        <div className="navbar-buttons">
            <button className="btn btn-sm btn-outline-info mr-3" onClick={handleShowLogin}>
                <i className='fas fa-sign-in-alt '></i>
                <span> Ingresar </span>
            </button>            
            <button className="btn btn-sm btn-outline-info mr-3" onClick={handleShowRegister}>
                <i className='fas fa-user-plus '></i>
                <span> Registrarse</span>
            </button>
        </div>
            
    )
}
