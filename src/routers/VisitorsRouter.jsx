import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../components/pages/visitors/HomePage';
import { RentalPage } from '../components/pages/visitors/RentalPage';
import { AboutPage } from '../components/pages/visitors/AboutPage';
import { ContactPage } from '../components/pages/visitors/ContactPage';
import { QuotePage } from '../components/pages/visitors/QuotePage';
import { ErrorPage } from '../components/pages/ErrorPage';

export const VisitorsRouter = () => {

    console.log('VisitorsRouter');
    
    return (
        <Switch >
            <Route exact path="/" component={HomePage} />
            <Route exact path="/rental" component={RentalPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/quote" component={QuotePage} />

            <Route component={ErrorPage}/>
        </Switch>
    )
}
