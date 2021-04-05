import React/*, { useEffect }*/ from 'react'
import { /*useDispatch, */useSelector } from 'react-redux';
import { ListDataFound } from './ListDataFound';
import { useForm } from '../../hooks/userForm';
import '../../assets/css/search-client.scss';

const columns = [
  ["id", "id", false],
  ["code", "Código", true],
  ["title", "Descripción", true]
]

export const SearchClient = () => {
//   const dispatch = useDispatch();
  const {customers} = useSelector(state => state.customer)

//   const {activeCustomer} = useSelector(state => state.customer);
  const [formValues, handleInputChange, reset] = useForm({Code: ''});
  const {Code} = formValues;


  const handleClick = (rowData) => {
    const {id} = JSON.parse(JSON.stringify(rowData));
    // dispatch(findProductById(id));
    // dispatch(clearProductsLoaded())
    console.log(id)
    reset();
  } 
    

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {          
    //   dispatch(findProductByCode(Code));
      
      if (!!customers[0]) {
        const {id} = customers[0]
        if (!!id) {
        //   dispatch(findProductById(id));
        //   if(!!activeProduct) reset();
        }    
      }
    }
  }
    
//   useEffect(() => {
//     dispatch(findProductByCode(Code.toUpperCase()));
//   }, [dispatch, Code])


  return (
    <div className="search-code">
      <h5 className="search-code-title">Buscar Cliente</h5>
      <div className="input-group form-group group-input-search-code input-search-code">
        <div className="input-group-prepend">
          <span className="input-group-text input-code-span-text">RIF ó Nombre</span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Código"
          name="Code"
          autoComplete="off"
          value={Code}
          onChange={handleInputChange}
          // onFocus={handleInputFocus}
          onKeyPress={handleOnKeyPress}
        />
          
      </div>
      {
        /*(customer.length > 0) &&*/ (<div className="input-search-code"> 
                                    <ListDataFound
                                      data={customers}
                                      hasHeader={true}
                                      columns={columns}
                                      handleClick={handleClick}
                                    />
                                  </div>)
      }
    </div>
  )
}
