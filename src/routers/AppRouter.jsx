import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VisitorsRouter } from './VisitorsRouter';
import { UsersRouter } from './UsersRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { NavBar } from '../components/ui/navbars/NavBar';
import '../components/ui/navbars/navbar-styles.scss';

localStorage.setItem('role', 0);
localStorage.setItem('isLoggedIn', false);
localStorage.setItem('name', '');

export const AppRouter = () => {
    
    const checking = false;
    const role = Number(localStorage.getItem('role'))
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    let isUser = false;
    let redirectTo = "/";

    if (isLoggedIn && role >= 2) {
        isUser = true;
        
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
