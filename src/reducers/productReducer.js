import { types } from '../types/types';


const initialState = {
    products: [],
    activeProduct: null
}


export const productReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.productLoaded:
            return {
                ...state,
                products: [...action.payload]
            }

        default:
            return state;

    }

}