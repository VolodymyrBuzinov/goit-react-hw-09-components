const getName = state => state.auth.user.name;

const getAuth = state => state.auth.isAuthorised;

const exported = { getName, getAuth };
export default exported;
