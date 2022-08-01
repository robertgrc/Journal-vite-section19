import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //     id: "ABC123",
    //     title: '',
    //     body: '',
    //     date: 1231234,
    //     imageUrls: [], //https://foto1.jpg, https://foto2.jpg https://foto3.jpg
    // }
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = journalSlice.actions;
