import axios from 'axios';
import authActions from './authActions';
const BASE_URL = 'https://goit-phonebook-api.herokuapp.com/users';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const actionRegister = (name, email, password) => dispatch => {
  const item = {
    name,
    email,
    password,
  };

  dispatch(authActions.actionRegisterRequest());

  axios
    .post(`${BASE_URL}/signup`, item)
    .then(({ data }) => {
      token.set(data.token);
      return dispatch(authActions.actionRegisterSuccess(data));
    })
    .catch(error =>
      dispatch(authActions.actionRegisterError(error.message)),
    );
};

const actionLogin = (email, password) => dispatch => {
  const item = {
    email,
    password,
  };

  dispatch(authActions.actionLoginRequest());

  axios
    .post(`${BASE_URL}/login`, item)
    .then(({ data }) => {
      token.set(data.token);
      return dispatch(authActions.actionLoginSuccess(data));
    })
    .catch(error =>
      dispatch(authActions.actionLoginError(error.message)),
    );
};

const actionLogout = () => dispatch => {
  dispatch(authActions.actionLogoutRequest());

  axios
    .post(`${BASE_URL}/logout`)
    .then(() => {
      token.unset();
      return dispatch(authActions.actionLogoutSuccess());
    })
    .catch(error =>
      dispatch(authActions.actionLogoutError(error.message)),
    );
};

const actionGetCurrent = () => (dispatch, getState) => {
  const { auth } = getState();
  if (!auth.token) {
    return;
  }

  token.set(auth.token);
  dispatch(authActions.actionGetCurrentRequest());
  axios
    .get(`${BASE_URL}/current`)
    .then(({ data }) =>
      dispatch(authActions.actionGetCurrentSuccess(data)),
    )
    .catch(error =>
      dispatch(authActions.actionGetCurrentError(error.message)),
    );
};

const exported = {
  actionRegister,
  actionLogin,
  actionLogout,
  actionGetCurrent,
};

export default exported;
