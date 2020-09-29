import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VisitorsRouter } from './VisitorsRouter';
import { UsersRouter } from './UsersRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
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
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    if (checking) {
        return (
            <h4>Espere...</h4>
        )
    }

    // const name = localStorage.getItem('name');
    console.log('AppRouter')

    return (
        <Router>
            <div>
                <NavBar/>
                <PublicRoute
                    path="/"
                    isAuthenticated= { isLoggedIn }
                    component={VisitorsRouter}
                    redirectTo= "/app/sales"
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
