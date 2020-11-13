import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {ErrorPage} from '../components/pages/ErrorPage';
import { NavBar } from '../components/ui/NavBar';
import {items} from '../assets/data/navbarJson';
import '../assets/css/index.scss';

export const AppRouter = () => {

    const checking = false;
    const {role} = useSelector(state => state.auth);


    if (checking) {
        return (
            <h4>Espere...</h4>
        )
    }


    return (
        <Router>
            <div className="app-router">
                <NavBar/>
    
                <Switch>
                    {items.filter(item => item.roles.includes(role) || item.roles === 'all').map(filtreredRole => (
                        <Route 
                            key = {filtreredRole.id}
                            component = {filtreredRole.component}
                            exact path = {filtreredRole.to}
                        />))
                    }
                    <Route component={ErrorPage}/>
                </Switch>
            </div>
        </Router>
    )
}
