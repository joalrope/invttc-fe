import { fetchWithToken } from '../helpers/fetch';

export const getNextNumberInvoice = () => {
  return async () => {
    await fetchWithToken('/invoices/lastInvoice');
  };
};
