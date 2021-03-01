import styles from './Login.module.css';
import authOperations from '../../redux/auth/authActions/authOperations';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function Login() {
  const [mail, setMail] = useState('');
  const onChangeMail = evt => {
    setMail(evt.target.value);
  };

  const [password, setPassword] = useState('');
  const onChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const dispatch = useDispatch();
  const onLogin = useCallback(
    () => dispatch(authOperations.actionLogin(mail, password)),
    [mail, password, dispatch],
  );
  const formSubmit = evt => {
    evt.preventDefault();
    onLogin(mail, password);
  };

  return (
    <>
      <div className={styles.container}>
        <h2>Login</h2>
        <form className={styles.form} onSubmit={formSubmit}>
          <label>
            <span>Your e-mail</span>
            <input
              type="text"
              name="mail"
              value={mail}
              onChange={onChangeMail}
              required
            />
          </label>
          <label>
            <span>Your password</span>
            <input
              type="text"
              name="password"
              value={password}
              onChange={onChangePassword}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
