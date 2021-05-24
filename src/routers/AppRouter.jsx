import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ErrorPage } from '../components/pages/ErrorPage';
import { NavBar } from '../components/ui/NavBar';
import { items } from '../assets/data/navbar.dataConfig';
import '../assets/css/index.scss';
import { AsideBar } from '../components/aside/AsideBar';

export const AppRouter = () => {
  const checking = false;
  const { role } = useSelector((state) => state.auth);

  if (checking) {
    return <h4>Espere...</h4>;
  }

  return (
    <Router>
      <div className='app-router'>
        <div className='row'>
          <div className='col-12'>
            <NavBar />
          </div>
        </div>
        <div className='row'>
          <AsideBar />
          <section className='col-10'>
            <Switch>
              {items
                .filter((item) => item.roles.includes(role) || item.roles === 'all')
                .map((filtreredRole) => (
                  <Route key={filtreredRole.to} component={filtreredRole.component} exact path={filtreredRole.to} />
                ))}
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
};
