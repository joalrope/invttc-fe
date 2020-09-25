import React from 'react'

export const LogoutButton = () => {

    const handleLogout = () => {
        // dispatch(startLogout());
        
        localStorage.clear();
    }
    const name = localStorage.getItem('name');


    return (
        <div className="navbar-buttons">
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">{name}</span>
            </nav>

            <button className="btn btn-sm btn-outline-danger mr-5" onClick={handleLogout}>
                <i className='fas fa-sign-out-alt '></i>
                <span> Salir</span>
            </button>
        </div>
    )
}
