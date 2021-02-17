import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';


export const findProductByCode = (code) => {
    
  return async (dispatch) => {

    try {

      if (code.length > 1) {
        const {ok, result} = await fetchWithToken(`/products/code/${code}`);

        if (ok) {
          dispatch(setProductsLoaded(result));
        }
      } else {
          dispatch(setProductsLoaded([]));
      }
        
    } catch (error) {
      console.log(error);
    }
  }
    
}


export const findProductById = (id) => {

  return async (dispatch) => {

    try {
      const {ok, result} = await fetchWithToken(`/products/${id}`);

      if (ok) {
        dispatch(productSetActive(result));
      }
    } catch (error) {
      console.log(error);
    }

  }
}

export const productSetActive = (product) => ({
    type: types.productSetActive,
    payload: product
});

export const productClearActive = () => ({
  type: types.productClearActive,
});


const setProductsLoaded = (products) => ({
    type: types.productLoaded,
    payload: products
})

export const addProductForSale = (product) => ({
  type: types.productAddedForSale,
  payload: product
})

export const clearPoductStore = () => ({
  type: types.productClearActivePoduct
})

export const setProductsForSale = (data) => ({
  type: types.productSetProductsForSale,
  payload: data
})