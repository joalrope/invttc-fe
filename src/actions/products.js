import { fetchWithToken } from '../helpers/fetch';
import { types } from '../types/types';


export const findProductByCode = (code) => {
    
    return async (dispatch) => {
        
        try {

            if (code.length > 1) {
                const resp = await fetchWithToken(`/products/code/${code}`);
                const body = await resp.json();
        
                if (body.ok) {
                    dispatch(setProductsLoaded(body.result));
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
            const resp = await fetchWithToken(`/products/${id}`);
            const body = await resp.json();

            if (body.ok) {
                dispatch(productSetActive(body.result));
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


const setProductsLoaded = (products) => ({
    type: types.productLoaded,
    payload: products
})