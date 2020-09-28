import React from 'react'

export const AuthButtons = () => {

    const handleShowLogin = () => {

        localStorage.setItem('name', 'Jose Rodriguez')
        localStorage.setItem('isLoggedIn', true)
        
        
    }
    
    const handleShowRegister = () => {
        
        localStorage.setItem('role', 0)
    }


    return (
        <div className="navbar-buttons">
            <button className="btn" type="submit" onClick={handleShowLogin}>
                <i className='fas fa-sign-in-alt '></i>
                <span>Ingresar</span>
            </button>
            <button className="btn" type="submit" onClick={handleShowRegister}>
            <i className='fas fa-user-plus '></i>
                Registrarse
            </button>
        </div>            
    )
}
