import { NavLink } from 'react-router-dom';
import styles from './Links.module.css';
import authSelectors from './redux/auth/authSelectors/authSelectors';
import UserMenu from './auth/userMenu/UserMenu';
import { useSelector } from 'react-redux';

export default function Links() {
  const name = useSelector(authSelectors.getName);
  const isAuthorized = useSelector(authSelectors.getAuth);

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName={styles.linkFocused}
            >
              Home
            </NavLink>
          </li>

          {isAuthorized ? (
            <>
              <li>
                <NavLink
                  to="/contacts"
                  className={styles.link}
                  activeClassName={styles.linkFocused}
                >
                  Phonebook
                </NavLink>
              </li>
            </>
          ) : (
            <li className={styles.items}>Please Register or LogIn</li>
          )}

          {isAuthorized ? (
            <UserMenu name={name} />
          ) : (
            <>
              <li>
                <NavLink
                  to="register"
                  className={styles.link}
                  activeClassName={styles.linkFocused}
                >
                  Registration
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={styles.link}
                  activeClassName={styles.linkFocused}
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
