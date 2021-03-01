import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Register.module.css';
import authOperations from '../../redux/auth/authActions/authOperations';

export default function Register() {
  const [name, setName] = useState('');
  const onChangeName = evt => {
    setName(evt.target.value);
  };
  const [mail, setMail] = useState('');
  const onChangeMail = evt => {
    setMail(evt.target.value);
  };
  const [password, setPassword] = useState('');
  const onChangePassword = evt => {
    setPassword(evt.target.value);
  };

  const dispatch = useDispatch();
  const onRegister = useCallback(
    () =>
      dispatch(authOperations.actionRegister(name, mail, password)),
    [name, mail, password, dispatch],
  );

  const formSubmit = evt => {
    evt.preventDefault();
    onRegister(name, mail, password);
  };

  return (
    <div className={styles.container}>
      <h2>Registration</h2>
      <form className={styles.form} onSubmit={formSubmit}>
        <label>
          <span>Your name</span>
          <input
            type="text"
            name="name"
            onChange={onChangeName}
            required
          />
        </label>
        <label>
          <span>Your e-mail</span>
          <input
            type="text"
            name="mail"
            onChange={onChangeMail}
            required
          />
        </label>
        <label>
          <span>Your password</span>
          <input
            type="text"
            name="password"
            onChange={onChangePassword}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
