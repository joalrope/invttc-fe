import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Error404Page } from '../components/pages/Error404Page';
import { DashboardPage } from '../components/pages/users/DashboardPage';
import { inventoryPage } from '../components/pages/users/inventoryPage';
import { ServicePage } from '../components/pages/users/ServicePage';
import { SalesPage } from '../components/pages/users/SalesPage';
import { AdminPage } from '../components/pages/users/AdminPage';

export const UsersRouter = () => {
    
    return (
        <div className="auth__box-container animate__animated animate__fadeIn">
            <Switch >
                <Route path='/app/admin' component={AdminPage} />
                <Route path='/app/dashboard' component={DashboardPage} />
                <Route path='/app/inventory' component={inventoryPage} />
                <Route path='/app/sales' component={SalesPage} />
                <Route path='/app/service' component={ServicePage} />

                {/* <Redirect to={Error404Page}/> */}
            </Switch>
        </div>
    )
}
