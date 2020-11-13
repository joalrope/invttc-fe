import React from 'react'
import { useEffect } from 'react';
import { useForm } from '../../hooks/userForm';


export const SearchCode = () => {

    const [formValues, handleInputChange] = useForm({
        Codigo: '',
    });

    const {Codigo} = formValues;

    const handleCodeChange = (code) => {
        console.log(code);

    }

    useEffect(() => {
        handleCodeChange(Codigo)
    }, [Codigo])

    return (
        <div className="input-group form-group input-code">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-search-dollar"></i></span>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder="Código"
                name="Codigo"
                value={Codigo}
                onChange={handleInputChange}
            />
        </div>
    )
}
