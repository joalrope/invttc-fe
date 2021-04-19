import { types } from '../types/types';

const initialState = {
  showInvoicePdf: false,
};

export const reportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.reportShowInvoicePdf:
      return {
        ...state,
        showInvoicePdf: action.payload,
      };

    // case types.uiCloseModal:
    //   return {
    //     ...state,
    //     modalOpen: false,
    //   };

    // case types.uiStartLoading:
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    // case types.uiFinishLoading:
    //   return {
    //     ...state,
    //     loading: false,
    //   };

    default:
      return state;
  }
};
