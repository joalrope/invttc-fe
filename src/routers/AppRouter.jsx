import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VisitorsRouter } from './VisitorsRouter';
import { UsersRouter } from './UsersRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { NavBar } from '../components/ui/navbars/NavBar';
import '../components/ui/navbars/navbar-styles.scss';


export const AppRouter = () => {
    
    const checking = false;
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    const role = Number(localStorage.getItem('role'));
    let isUser = false;
    let redirectTo = "/";

    if (isLoggedIn && role >= 2) {
        isUser = true;
        
        switch (role) {
            case 2:
                redirectTo = "/app/inventory";
                break;
            
            case 3:
                redirectTo = "/app/sales";
                break;
            
            case 4:
                redirectTo = "/app/admin";
                break;

            default:
                break;
        }
    }

    if (checking) {
        return (
            <h4>Espere...</h4>
        )
    }


    return (
        <Router>
            <div>
                <NavBar/>
                <PublicRoute
                    path="/"
                    isAuthenticated= { isUser }
                    component={VisitorsRouter}
                    redirectTo= {redirectTo}
                />

                <PrivateRoute
                    path="/app"
                    isAuthenticated= { isUser }
                    component={UsersRouter}
                    redirectTo= "/"
                />
            </div>
        </Router>
    )
}
