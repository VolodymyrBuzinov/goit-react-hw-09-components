import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors/authSelectors';

const PrivateRoute = ({
  component: Component,
  isAuthorised,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthorised ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectTo} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthorised: authSelectors.getAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
