import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { productReducer } from './productReducer';
import { customerReducer } from './customerReducer'


export const rootReducer = combineReducers({
    ui: uiReducer,
    product: productReducer,
    customer: customerReducer,
    auth: authReducer,
});