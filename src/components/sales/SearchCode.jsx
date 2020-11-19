import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-bs-datatable';
import { findProductByCode, findProductById } from '../../actions/products';
import { useForm } from '../../hooks/userForm';

const headers = [{prop: "code"}, {prop: "title"}];


export const SearchCode = () => {

    const {products} = useSelector(state => state.product)
    const {activeProduct} = useSelector(state => state.product);
    const dispatch = useDispatch();
    const [formValues, handleInputChange, reset] = useForm({Code: ''});
    const {Code} = formValues;
    const [isTableVisible, setisTableVisible] = useState(true)


    const handleRowClick = (row) => {
        const {id} = JSON.parse(JSON.stringify(row));
        dispatch(findProductById(id));
        setisTableVisible(false);
        if(!!activeProduct) {
            reset();
        }
    } 
    

    const handleOnKeyPress = (e) => {

        if (e.key === 'Enter') {
            dispatch(findProductByCode(Code));

            const {id} = products[0];

            if (!!id) {
                dispatch(findProductById(id));
                setisTableVisible(false);
                if(!!activeProduct) {
                    reset();
                }
            }
            
        }
    }
    

    const handleInputFocus = () => {
        setisTableVisible(true);
    }


    useEffect(() => {
        dispatch(findProductByCode(Code.toUpperCase()));
    }, [dispatch, Code])



    return (
        <>
    
        <div className="input-group form-group group-input-search-code">
            <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-search-dollar"></i></span>
            </div>
            <input
                type="text"
                className="form-control input-search-code"
                placeholder="Código"
                name="Code"
                autoComplete="off"
                value={Code}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onKeyPress={handleOnKeyPress}
            />
           
        </div>
        {
            (products.length > 0 && isTableVisible) && 
                (<div className="input-search-code">
                    <DataTable
                        tableHeaders={headers}
                        tableBody={products}
                        onRowClick={handleRowClick}
                    />
                </div>)
        }
        </>

    )
}
