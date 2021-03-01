import { createSelector } from '@reduxjs/toolkit';

const getItems = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const exported = {
  getItems,
  getLoading,
  getFilter,
  getVisibleContacts,
};
export default exported;
