import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { findProductByCode, findProductById } from '../../actions/products';
import { ListProductsFound } from './ListProductsFound';
import { useForm } from '../../hooks/userForm';
import '../../assets/css/search-code.scss';


export const SearchCode = () => {
  const {products} = useSelector(state => state.product)
  const {activeProduct} = useSelector(state => state.product);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({Code: ''});
  const {Code} = formValues;
  const [isTableVisible, setIsTableVisible] = useState(true)


  function handleClick(rowData) {
    const {id} = JSON.parse(JSON.stringify(rowData));
    dispatch(findProductById(id));
    setIsTableVisible(false);
    if (!!activeProduct) reset();
  } 
    

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {          
      dispatch(findProductByCode(Code));
      
      if (!!products[0]) {
        const {id} = products[0]
        if (!!id) {
          dispatch(findProductById(id));
          setIsTableVisible(false);
          if(!!activeProduct) reset();
        }    
      }
    }
  }
    

  const handleInputFocus = () => setIsTableVisible(true);
  

  useEffect(() => {
    dispatch(findProductByCode(Code.toUpperCase()));
  }, [dispatch, Code])


  return (
    <div className="search-code">
      <h5 className="search-code-title">Buscar Producto</h5>
      <div className="input-group form-group group-input-search-code input-search-code">
        <div className="input-group-prepend">
          <span className="input-group-text input-code-span-text"><i className="fas fa-search-dollar">Código</i></span>
        </div>
        <input
          type="text"
          className="form-control"
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
        (products.length > 0 && isTableVisible) && (<div className="input-search-code"> 
                                                      <ListProductsFound products={products} onClick={handleClick}/>
                                                    </div>)
      }
    </div>
  )
}
