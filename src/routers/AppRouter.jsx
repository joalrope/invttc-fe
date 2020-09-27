import React from 'react';
// import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { Error404Page } from '../components/pages/Error404Page';
import { UsersNav } from '../components/ui/navbars/UsersNav';
import { VisitorsNav } from '../components/ui/navbars/VisitorsNav';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { firebase } from '../../firebase/firebaseConfig';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { UsersRouter } from './UsersRouter';
import { VisitorsRouter } from './VisitorsRouter';
// import { login } from '../../actions/auth';
// import { startLoadingNotes } from '../../actions/notes';
import '../components/ui/navbars/navbar.css';


export const AppRouter = () => {

    // const dispatch = useDispatch();

    // const [checking, setChecking] = useState(true);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
        
    //     firebase.auth().onAuthStateChanged( (user) => {
            
    //         if (user?.uid) {
                
    //             dispatch(login(user.uid, user.displayName));
    //             setIsLoggedIn(true);

    //             dispatch(startLoadingNotes(user.uid));

    //         } else {
    //             setIsLoggedIn(false);
    //         }

    //         setChecking(false);
    //     });
        
    // }, [dispatch, setChecking, setIsLoggedIn])

    const checking = false;
    const isLoggedIn = true;

    if (checking) {
        return (
            <h4>Espere...</h4>
        )
    }

    const name = localStorage.getItem('name');

    return (
        <Router>
            <Switch>
                {/* <NavBar/> */}
                { (name) ? <UsersNav/> : <VisitorsNav/> }   
                <PublicRoute
                    exact path="/"
                    isAuthenticated= { isLoggedIn }
                    component={VisitorsRouter}
                    redirectTo= "/"
                />

                <PrivateRoute
                    exact path="/app"
                    isAuthenticated= { isLoggedIn }
                    component={UsersRouter}
                    redirectTo= "/"
                />

                <Redirect to='/404' component={Error404Page} />
            </Switch>
        </Router>
    )
}
