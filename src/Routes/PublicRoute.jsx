import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../redux/auth/authSelectors/authSelectors';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  redirectTo,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getAuth);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        children
      )}
    </Route>
  );
}
