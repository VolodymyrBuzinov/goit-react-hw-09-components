import { createAction } from '@reduxjs/toolkit';

const actionItemsRequest = createAction(
  'phonebook/actionItemsRequest',
);
const actionItemsSuccess = createAction(
  'phonebook/actionItemsSuccess',
);
const actionItemsError = createAction('phonebook/fetchItemsError');
const actionAddRequest = createAction('phonebook/AddRequest');
const actionAddSucess = createAction('phonebook/AddSucess');
const actionAddError = createAction('phonebook/AddError');
const actionDeleteRequest = createAction('phonebook/DeleteRequest');
const actionDeleteSucess = createAction('phonebook/DeleteSucess');
const actionDeleteError = createAction('phonebook/DeleteError');
const actionFilter = createAction('phonebook/Filter');

const exported = {
  actionItemsRequest,
  actionItemsSuccess,
  actionItemsError,
  actionAddRequest,
  actionAddSucess,
  actionAddError,
  actionDeleteRequest,
  actionDeleteSucess,
  actionDeleteError,
  actionFilter,
};
export default exported;
