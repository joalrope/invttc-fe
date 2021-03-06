import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../components/pages/HomePage';
import { RentalPage } from '../components/pages/RentalPage';
import { AboutPage } from '../components/pages/AboutPage';
import { ContactPage } from '../components/pages/ContactPage';
import { QuotePage } from '../components/pages/QuotePage';
import { ErrorPage } from '../components/pages/ErrorPage';
import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';
import { ForgotPage } from '../components/auth/ForgotPage';

export const VisitorsRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/rental' component={RentalPage} />
      <Route exact path='/contact' component={ContactPage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/quote' component={QuotePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterPage} />
      <Route exact path='/forgot' component={ForgotPage} />

      <Route component={ErrorPage} />
    </Switch>
  );
};
