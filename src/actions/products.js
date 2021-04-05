import { template } from '../assets/data/json-to-html-table';
import { fetchWithToken } from '../helpers/fetch';
import { jsonSort } from '../helpers/json-sort';
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
      
      const product = jsonSort(result, template)

      if (ok) {
        dispatch(productSetActive(product));
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

export const clearProductsLoaded = () => ({
  type: types.clearProductsLoaded
})

export const addProductForSale = (product) => ({
  type: types.productAddedForSale,
  payload: product
})

export const clearActivePoduct = () => ({
  type: types.productClearActivePoduct
})

export const setProductsForSale = (data) => ({
  type: types.productSetProductsForSale,
  payload: data
})