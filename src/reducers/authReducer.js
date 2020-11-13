import { types } from '../types/types';

const initialState = {
    checking: true,
    uid: null,
    name: null,
    role: 'basic',
    isLoggedIn: false
}
export const authReducer = ( state = initialState, action ) => {

    
    switch (action.type) {
        case types.authlogin:
            return {
                ...state,
                ...action.payload,
                role: action.payload.role,
                isLoggedIn: action.payload.isLoggedIn,
                checking: false
            }

        case types.authcheckingFinish:
            return {
                ...state,
                checking: false
            }

        case types.authlogout:
            return {
                state: initialState,
             }

        case types.authShowLogin:
            return {
                ...state,
                loginVisible: action.payload
            }
        
        case types.authShowRegister:
            return {
                ...state,
                RegisterVisible: action.payload
            }
        
            case types.authShowPassForgot:
            return {
                ...state,
                PassForgotVisible: action.payload
            }
    
        default:
            return state;
    }

}