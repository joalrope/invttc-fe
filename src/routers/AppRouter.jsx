import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { VisitorsRouter } from './VisitorsRouter';
import { UsersRouter } from './UsersRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { Error404Page } from '../components/pages/Error404Page';
import { NavBar } from '../components/ui/navbars/NavBar';
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
    const isLoggedIn = false;

    if (checking) {
        return (
            <h4>Espere...</h4>
        )
    }

    // const name = localStorage.getItem('name');

    return (

        <Router>
            <Switch>
                <NavBar/>
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
