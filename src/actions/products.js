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


const setProductsLoaded = (products) => ({
    type: types.productLoaded,
    payload: products
})