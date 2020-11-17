import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { findProductByCode } from '../../actions/products';
import { useForm } from '../../hooks/userForm';

const customStyles = {
    title: {
      style: {
        fontSize: "1px",
        fontColor: "red",
        fontWeight: "10"
      }
    },
    rows: {
      style: {
        minHeight: "20px", // override the row height
        
    }
},
headCells: {
    style: {
        fontSize: "12px",
        fontWeight: "300",
    }
},
cells: {
    style: {
        fontSize: "12px",
        cursor: "pointer"
      }
    }
  };


const columns = [
    {
      name: "Código",
      selector: "code",
    },
    {
      name: "Descripción",
      selector: "title",
    }
  ];

export const SearchCode = () => {

    const {products} = useSelector(state => state.product)
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({Code: ''});
    const {Code} = formValues;



    useEffect(() => {
        dispatch(findProductByCode(Code));
    }, [dispatch, Code])

    console.log(products.length)
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
            {
                (products.length > 0) && 
                    (<div className="table-container">
                        <DataTable
                            columns={columns}
                            data={products}
                            customStyles={customStyles}
                        />
                    </div>)
            }
        </div>

    )
}
