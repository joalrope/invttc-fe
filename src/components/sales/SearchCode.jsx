import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-bs-datatable';
import { findProductByCode } from '../../actions/products';
import { useForm } from '../../hooks/userForm';



const headers = [
    {
        title: "Código",
        prop: "code",
    },
    {
        title: "Producto",
        prop: "title"
    }
  ];

export const SearchCode = () => {

    const {products} = useSelector(state => state.product)
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({Code: ''});
    const {Code} = formValues;

    const handleRowClick = (row) => {
        alert(`You clicked on the row ${JSON.stringify(row)}`);
    } 


    useEffect(() => {
        dispatch(findProductByCode(Code));
    }, [dispatch, Code])

    console.log(products.length)
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
            />
           
        </div>
        {
            (products.length > 0) && 
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
