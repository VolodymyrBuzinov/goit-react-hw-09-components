import { createAction } from '@reduxjs/toolkit';

const actionRegisterRequest = createAction(
  'phonebook/RegisterRequest',
);
const actionRegisterSuccess = createAction(
  'phonebook/RegisterSuccess',
);
const actionRegisterError = createAction('phonebook/RegisterError');
const actionLoginRequest = createAction('phonebook/LoginRequest');
const actionLoginSuccess = createAction('phonebook/LoginSuccess');
const actionLoginError = createAction('phonebook/LoginError');
const actionLogoutRequest = createAction('phonebook/LogoutRequest');
const actionLogoutSuccess = createAction('phonebook/LogoutSuccess');
const actionLogoutError = createAction('phonebook/LogoutError');
const actionGetCurrentRequest = createAction(
  'phonebook/getCurrentRequest',
);
const actionGetCurrentSuccess = createAction(
  'phonebook/getCurrentSuccess',
);
const actionGetCurrentError = createAction(
  'phonebook/getCurrentError',
);

const exported = {
  actionRegisterRequest,
  actionRegisterSuccess,
  actionRegisterError,
  actionLoginRequest,
  actionLoginSuccess,
  actionLoginError,
  actionLogoutRequest,
  actionLogoutSuccess,
  actionLogoutError,
  actionGetCurrentRequest,
  actionGetCurrentSuccess,
  actionGetCurrentError,
};

export default exported;
