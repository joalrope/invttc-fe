import { types } from '../types/types';

export const startShowInvoicePdf = (show) => ({
  type: types.reportShowInvoicePdf,
  payload: show,
});

// export const uiCloseModal = () => ({
//   type: types.uiCloseModal,
// });

// export const uiStartLoading = () => ({
//   type: types.uiStartLoading,
// });

// export const uiFinishLoading = () => ({
//   type: types.uiFinishLoading,
// });
