import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VisitorsRouter } from './VisitorsRouter';
import { UsersRouter } from './UsersRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { NavBar } from '../components/ui/NavBar';
import '../assets/css/index.scss';


export const AppRouter = () => {
    
    const checking = false;
    const role = Number(localStorage.getItem('role'))
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    let redirectTo = "/";

        
    switch (role) {

        case 0:
        case 1:
            redirectTo = "/"
            break;
        case 2:
            redirectTo = "/app/inventory";
            break;
        
        case 3:
            redirectTo = "/app/sales";
            break;
        
        case 4:
            redirectTo = "/app/admin/reports";
            break;

        default:
            break;
    }

    if (checking) {
        return (
            <h4>Espere...</h4>
        )
    }


    return (
        <Router>
            <div className="app-router">
                <NavBar/>
                <PublicRoute
                    path="/"
                    isAuthenticated= { isLoggedIn }
                    component={VisitorsRouter}
                    redirectTo= {redirectTo}
                />

                <PrivateRoute
                    path="/app"
                    isAuthenticated= { isLoggedIn }
                    component={UsersRouter}
                    redirectTo= "/"
                />
            </div>
        </Router>
    )
}
