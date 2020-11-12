import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { VisitorsRouter } from './VisitorsRouter';
// import { UsersRouter } from './UsersRouter';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';
import { NavBar } from '../components/ui/NavBar';
import '../assets/css/index.scss';
import {items} from '../assets/data/navbarJson';
import {ErrorPage} from '../components/pages/ErrorPage';
import { startChecking } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const checking = false;
    const role = localStorage.getItem('role');
    // const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    // let redirectTo = "/";

        
    // switch (role) {

    //     case 0:
    //     case 1:
    //         redirectTo = "/"
    //         break;
    //     case 2:
    //         redirectTo = "/app/inventory";
    //         break;
        
    //     case 3:
    //         redirectTo = "/app/sales";
    //         break;
        
    //     case 4:
    //         redirectTo = "/app/admin/reports";
    //         break;

    //     default:
    //         break;
    // }


    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch])

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
                    {items.filter(item => item.role === role || item.role === 'all').map(filtreredRole => (
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
