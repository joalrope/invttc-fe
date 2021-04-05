import { types } from '../types/types';


const initialState = {
  customers: [],
  activeCustomer: null
}


export const customerReducer = ( state = initialState, action ) => {

  switch (action.type) {

    case types.customersLoaded:
      return {
        ...state,
        customers: [...action.payload]
      }

    case types.activeCustomer:
      return {
        ...state,
        customers: {
          ...action.payload
        }
      }

      default:
        return state;
  }
}  