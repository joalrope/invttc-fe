import React from 'react'
import { useEffect } from 'react';
import { findProductByCode } from '../../helpers/find-product';
import { useForm } from '../../hooks/userForm';


export const SearchCode = () => {

    const [formValues, handleInputChange] = useForm({
        Code: '',
    });

    const {Code} = formValues;

    useEffect(() => {
        findProductByCode(Code)
    }, [Code])

    return (
        <div className="input-group form-group input-code">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-search-dollar"></i></span>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Código"
                name="Code"
                value={Code}
                onChange={handleInputChange}
            />
        </div>
    )
}
