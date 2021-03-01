import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from '../authActions/authActions';

const user = createReducer(
  {},
  {
    [authActions.actionRegisterSuccess]: (state, { type, payload }) =>
      payload.user,
    [authActions.actionLoginSuccess]: (state, { type, payload }) =>
      payload.user,
    [authActions.actionGetCurrentSuccess]: (
      state,
      { type, payload },
    ) => payload,
    [authActions.actionLogoutSuccess]: () => ({}),
  },
);
const token = createReducer(
  {},
  {
    [authActions.actionRegisterSuccess]: (state, { type, payload }) =>
      payload.token,
    [authActions.actionLoginSuccess]: (state, { type, payload }) =>
      payload.token,
    [authActions.actionLogoutSuccess]: () => ({}),
  },
);

const isAuthorised = createReducer(false, {
  [authActions.actionRegisterRequest]: () => false,
  [authActions.actionRegisterSuccess]: () => true,
  [authActions.actionRegisterError]: () => false,
  [authActions.actionLoginRequest]: () => false,
  [authActions.actionLoginSuccess]: () => true,
  [authActions.actionLoginError]: () => false,
  [authActions.actionLogoutRequest]: () => true,
  [authActions.actionLogoutSuccess]: () => false,
  [authActions.actionLogoutError]: () => true,
  [authActions.actionGetCurrentRequest]: () => false,
  [authActions.actionGetCurrentSuccess]: () => true,
  [authActions.actionGetCurrentError]: () => false,
});

const error = createReducer(false, {
  [authActions.actionRegisterRequest]: () => false,
  [authActions.actionRegisterSuccess]: () => false,
  [authActions.actionRegisterError]: () => true,
  [authActions.actionLoginRequest]: () => false,
  [authActions.actionLoginSuccess]: () => false,
  [authActions.actionLoginError]: () => true,
  [authActions.actionLogoutRequest]: () => false,
  [authActions.actionLogoutSuccess]: () => false,
  [authActions.actionLogoutError]: () => true,
});

export default combineReducers({
  user,
  token,
  isAuthorised,
  error,
});
