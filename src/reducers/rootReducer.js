import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { productReducer } from './productReducer';


export const rootReducer = combineReducers({
    ui: uiReducer,
    product: productReducer,
    auth: authReducer,
});