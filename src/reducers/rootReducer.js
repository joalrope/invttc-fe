import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { customerReducer } from './customerReducer';
import { productReducer } from './productReducer';
import { reportsReducer } from './reportsReducer';
import { transactionReducer } from './transactionReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  customer: customerReducer,
  product: productReducer,
  reports: reportsReducer,
  transaction: transactionReducer,
});
