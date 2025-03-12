import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./operations";

import { selectContacts } from "./selectors";
import toast from "react-hot-toast";
import { selectNameFilter } from "../filter/selectors";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.error = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        toast.success("The contact was successfully deleted from your list");
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        toast.success("The contact was successfully added to your list");
      })
      .addCase(editContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export const contactsReducer = slice.reducer;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const lowercasedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(lowercasedFilter) ||
        contact.number.toLowerCase().includes(lowercasedFilter)
    );
  }
);
