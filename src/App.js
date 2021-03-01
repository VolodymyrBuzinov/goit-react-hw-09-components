import Phonebook from './phonebook/Phonebook';
import {
  BrowserRouter as Router,
  Switch,   
} from "react-router-dom";
import StartPage from './startPage/startPage';
import Register from './auth/register/Register';
import Login from './auth/login/Login';
import Links from './Links.jsx';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import authOperations from './redux/auth/authActions/authOperations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function App () {
  const dispatch = useDispatch();  
   useEffect(() => {
    const getCurrentUser = () => dispatch(authOperations.actionGetCurrent());
    getCurrentUser();
  }, [dispatch]);  

     return (
    <Router>
      <Links/>
      <Switch>
          <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={Phonebook}
            />
        <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={Register}
            />
          <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={Login}
            />       
          <PublicRoute exact path="/" component={StartPage} />
        </Switch>      
      </Router>
  )   
}




