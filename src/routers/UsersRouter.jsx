import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DashboardPage } from '../components/pages/DashboardPage';
import { ServicePage } from '../components/pages/ServicePage';
import { ErrorPage } from '../components/pages/ErrorPage';
import { SalesPage } from '../components/pages/SalesPage';
import { QuotePage } from '../components/pages/QuotePage';
import { ProductsPage } from '../components/pages/ProductsPage';
import { HomePage } from '../components/pages/HomePage';
import { RentalPage } from '../components/pages/RentalPage';
import { ContactPage } from '../components/pages/ContactPage';
import { AboutPage } from '../components/pages/AboutPage';
import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';
import { ForgotPage } from '../components/auth/ForgotPage';
import { ReportPage } from '../components/pages/ReportPage';

export const UsersRouter = () => {

    
    return (
        <Switch >
            <Route exact path="/app" component={HomePage} />
            <Route exact path="/app/rental" component={RentalPage} />
            <Route exact path="/app/contact" component={ContactPage} />
            <Route exact path="/app/about" component={AboutPage} />
            <Route exact path="/app/quote" component={QuotePage} />
            <Route exact path="/app/login" component={LoginPage} />
            <Route exact path="/app/register" component={RegisterPage} />
            <Route exact path="/app/forgot" component={ForgotPage} />
            <Route exact path='/app/inventory/quote' component={QuotePage} />
            <Route exact path='/app/inventary/prods-in' component={ProductsPage} />
            <Route exact path='/app/inventary/prods-out' component={ProductsPage} />
            <Route exact path='/app/inventory/quote' component={QuotePage} />
            <Route exact path='/app/sales' component={SalesPage} />
            <Route exact path='/app/sales/quote' component={QuotePage} />
            <Route exact path='/app/admin/inventary/prods-in' component={ProductsPage} />
            <Route exact path='/app/admin/inventary/prods-out' component={ProductsPage} />
            <Route exact path='/app/admin/sales' component={SalesPage} />
            <Route exact path='/app/admin/quote' component={QuotePage} />
            <Route exact path='/app/admin/reports' component={ReportPage} />
            <Route exact path='/app/dashboard' component={DashboardPage} />
            <Route exact path='/app/service' component={ServicePage} />

            <Route component={ErrorPage}/>
        </Switch>
    )
}
