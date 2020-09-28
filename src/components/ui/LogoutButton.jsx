import React from 'react'

export const LogoutButton = () => {

    const handleLogout = () => {
        // dispatch(startLogout());
        
        localStorage.setItem('isLoggedIn', false)
        localStorage.setItem('name', '')
        

    }
    const name = localStorage.getItem('name');


    return (
        <div className="navbar-buttons">
            <nav className="navbar-user-name">
                <span className="navbar-brand-user-name">{name}</span>
            </nav>

            <button className="btn" onClick={handleLogout}>
                <i className='fas fa-sign-out-alt '></i>
                <span> Salir</span>
            </button>
        </div>
    )
}
