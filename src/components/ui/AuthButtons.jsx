import React from 'react'

export const AuthButtons = () => {

    const handleShowLogin = () => {

        localStorage.setItem('name', 'Jose Rodriguez')
        
        
    }
    
    const handleShowRegister = () => {
        
        localStorage.setItem('role', 0)
    }


    return (
        <div className="collapse navbar-collapse navbar-buttons" id="navbarSupportedContent">
            <button className="btn" type="submit" onClick={handleShowLogin}>
                <i className='fas fa-sign-in-alt '></i>
                <span>Ingresar</span>
            </button>
            <button className="btn my-2 my-sm-0" type="submit" onClick={handleShowRegister}>
            <i className='fas fa-user-plus '></i>
                Registrarse
            </button>
        </div>            
    )
}
