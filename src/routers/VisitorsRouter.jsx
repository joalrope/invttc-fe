import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from '../components/pages/visitors/HomePage';
import { RentalPage } from '../components/pages/visitors/RentalPage';
import { AboutPage } from '../components/pages/visitors/AboutPage';
import { ContactPage } from '../components/pages/visitors/ContactPage';
import { QuotePage } from '../components/pages/visitors/QuotePage';

export const VisitorsRouter = () => {


    
    return (
        <Switch >
            <Route exact path='/' component={HomePage} />
            <Route exact path='/rental' component={RentalPage} />
            <Route exact path='/quote' component={QuotePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/contact' component={ContactPage} />

            <Redirect to='/'/>
        </Switch>
    )
}
