import authOperations from '../../redux/auth/authActions/authOperations';
import styles from './UserMenu.module.css';
import authSelectors from '../../redux/auth/authSelectors/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getName);

  const onLogout = useCallback(
    () => dispatch(authOperations.actionLogout()),
    [dispatch],
  );

  return (
    <>
      <li className={styles.item}>
        <span>Welcome: "{name}"</span>
        <button onClick={onLogout}>Logout</button>
      </li>
    </>
  );
}
