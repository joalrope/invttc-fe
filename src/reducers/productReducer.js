import { types } from '../types/types';


const initialState = {
  products: [],
  productsForSale: [],
  activeProduct: null
}


export const productReducer = ( state = initialState, action ) => {

  switch (action.type) {

    case types.productLoaded:
      return {
        ...state,
        products: [...action.payload]
      }
    
    case types.productSetActive:
      return {
        ...state,
        activeProduct: {
          ...action.payload
        }
      }

    case types.productClearActivePoduct:
      return {
        ...state,
        ...initialState
      }

    case types.productAddedForSale:
      return {
        ...state,
        productsForSale: [
          ...state.productsForSale,
          action.payload
        ]
      }

    case types.productSetQtyForSale:
      return {
        ...state,
          productsForSale: action.payload
          
      }

    default:
      return state;

  }

}