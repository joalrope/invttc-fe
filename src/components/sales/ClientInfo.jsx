import React from 'react'

export const ClientInfo = () => {
    return (
        <div>
            <h5>Seleccionar del Cliente</h5>
            <div className="input-group form-group input-searh-client">
                <div className="input-group-prepend">
                    <span className="input-group-text">Nombre Razón Social:</span>
                </div>
                <input type="text" className="form-control"/>
            </div>
        </div>
    )
}
