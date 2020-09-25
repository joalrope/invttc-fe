import React from 'react'

export const AuthButtons = () => {

    const handleShowLogin = () => {

        localStorage.setItem('name', 'Jose Rodriguez')
        
        
    }
    
    const handleShowRegister = () => {
        
        localStorage.setItem('role', 0)
    }


    return (
        <div className="navbar-auth">
            <button className="btn" onClick={handleShowLogin}>
                <i className='fas fa-sign-in-alt '></i>
                <span>   Ingresar </span>
            </button>            
            <button className="btn" onClick={handleShowRegister}>
                <i className='fas fa-user-plus '></i>
                <span>   Registrarse</span>
            </button>
        </div>
            
    )
}
