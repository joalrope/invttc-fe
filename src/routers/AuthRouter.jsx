import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RegisterScreen } from '../auth/RegisterScreen';
import { Home } from '../components/pages/Home';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container animate__animated animate__fadeIn">
                <Switch >
                    <Route path='/' component={Home} />
                    <Route path='/auth/register' component={RegisterScreen} />

                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
    )
}
