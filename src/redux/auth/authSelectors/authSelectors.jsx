const getName = state => state.auth.user.name;

const getAuth = state => state.auth.isAuthorised;

const getError = state => state.auth.error;

const exported = { getName, getAuth, getError };
export default exported;
