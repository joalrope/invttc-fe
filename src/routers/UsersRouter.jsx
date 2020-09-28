import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DashboardPage } from '../components/pages/users/DashboardPage';
import { inventoryPage } from '../components/pages/users/inventoryPage';
import { ServicePage } from '../components/pages/users/ServicePage';
import { SalesPage } from '../components/pages/users/SalesPage';
import { AdminPage } from '../components/pages/users/AdminPage';
import { ErrorPage } from '../components/pages/ErrorPage';

export const UsersRouter = () => {

    console.log('UsersRouter');
    
    return (
        <div className="auth__box-container animate__animated animate__fadeIn">
            <Switch >
                <Route exact path='/app/sales' component={SalesPage} />
                <Route exact path='/app/inventory' component={inventoryPage} />
                <Route exact path='/app/admin' component={AdminPage} />
                <Route exact path='/app/dashboard' component={DashboardPage} />
                <Route exact path='/app/service' component={ServicePage} />

                <Redirect exact to='/404' component={ErrorPage}/>
            </Switch>
        </div>
    )
}
