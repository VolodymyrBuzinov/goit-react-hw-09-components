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
import { Component } from 'react';
import authOperations from './redux/auth/authActions/authOperations';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
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
  );
  }  
}


const mapDispatchToProps = dispatch => ({
  getCurrentUser: () => dispatch(authOperations.actionGetCurrent()),  
});

export default connect(null, mapDispatchToProps)(App);

