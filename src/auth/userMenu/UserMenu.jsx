import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authActions/authOperations';
import styles from './UserMenu.module.css';
import authSelectors from '../../redux/auth/authSelectors/authSelectors';
function UserMenu({ name, onLogout }) {
  return (
    <>
      <li className={styles.item}>
        <span>Welcome: "{name}"</span>
        <button onClick={onLogout}>Logout</button>
      </li>
    </>
  );
}

const mapStateToProps = state => ({
  name: authSelectors.getName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.actionLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
