import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors/authSelectors';

const PublicRoute = ({
  component: Component,
  isAuthorised,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthorised && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthorised: authSelectors.getAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
