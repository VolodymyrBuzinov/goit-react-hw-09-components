import { combineReducers } from 'redux';
// import actionTypes from '../actions/actionsTypes';
import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions/actions';

const {
  actionItemsRequest, actionItemsSuccess, actionItemsError, actionAddRequest,
  actionAddSucess, actionAddError, actionDeleteRequest, actionDeleteSucess, actionDeleteError, actionFilter
} = actions;

const items = createReducer([], {
  [actionItemsSuccess]: (state, { type, payload }) => payload,
  [actionAddSucess]: (state, { type, payload }) => [payload, ...state],
  [actionDeleteSucess]: (state, { type, payload }) => state.filter(({ id }) => id !== payload)
})
const filter = createReducer('', {
  [actionFilter]: (state, { type, payload }) => payload
})

const loading = createReducer(false, {
  [actionItemsRequest]: () => true,
  [actionItemsSuccess]: () => false,
  [actionItemsError]: () => false,
  [actionAddRequest]: () => true,
  [actionAddSucess]: () => false,
  [actionAddError]: () => false,
  [actionDeleteRequest]: () => true,
  [actionDeleteSucess]: () => false,
  [actionDeleteError]: () => false,
})

export default combineReducers({
  items,
  filter, 
  loading
});