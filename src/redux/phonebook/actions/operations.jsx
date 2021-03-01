import axios from 'axios';
import actions from './actions';

const {
  actionItemsRequest,
  actionItemsSuccess,
  actionItemsError,
  actionAddRequest,
  actionAddSucess,
  actionAddError,
  actionDeleteRequest,
  actionDeleteSucess,
  actionDeleteError,
} = actions;

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => dispatch => {
  dispatch(actionItemsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actionItemsSuccess(data)))
    .catch(error => dispatch(actionItemsError(error.message)));
};

const actionAdd = (name, number) => dispatch => {
  const item = {
    name,
    number,
  };

  dispatch(actionAddRequest());

  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(actionAddSucess(data)))
    .catch(error => dispatch(actionAddError(error.message)));
};

const actionDelete = contactId => dispatch => {
  dispatch(actionDeleteRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actionDeleteSucess(contactId)))
    .catch(error => dispatch(actionDeleteError(error.message)));
};

const exported = { fetchContacts, actionAdd, actionDelete };
export default exported;
