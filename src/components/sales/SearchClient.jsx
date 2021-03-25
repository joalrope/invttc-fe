import React from 'react';
import '../../assets/css/search-client.scss';

export const SearchClient = () => {
    return (
        <div className="search-client">
            <h5 className="search-client-title">Seleccionar del Cliente</h5>
            <div className="input-group form-group input-search-client input-search-client">
                <div className="input-group-prepend">
                    <span className="input-group-text input-client-span-text">Nombre Razón Social:</span>
                </div>
                <input type="text" className="form-control"/>
            </div>
        </div>
    )
}
