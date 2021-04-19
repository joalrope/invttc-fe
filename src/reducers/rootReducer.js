import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { productReducer } from './productReducer';
import { customerReducer } from './customerReducer';
import { reportsReducer } from './reportsReducer';

export const rootReducer = combineReducers({
  product: productReducer,
  customer: customerReducer,
  auth: authReducer,
  reports: reportsReducer,
});
