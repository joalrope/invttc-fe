import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findProductByCode } from '../../actions/products';
import { useForm } from '../../hooks/userForm';
import { ListProducts } from './ListProducts';


export const SearchCode = () => {

    const {products} = useSelector(state => state.product)
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({Code: ''});
    const {Code} = formValues;
    
    useEffect(() => {
        dispatch(findProductByCode(Code));
    }, [dispatch, Code])


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
                products.map(product => (
                    <ListProducts key={product.id } {...product}/>
                ))

            }
        </div>
    )
}
