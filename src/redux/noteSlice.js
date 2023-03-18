import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  noteData: [],
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    // add note object to noteData array
    addNote: (state, action) => {
      state.noteData.push(action.payload);
    },

    // remove note object from noteData array
    removeNote: (state, action) => {
      state.noteData = state.noteData.filter(
        (note, index) => index !== action.payload,
      );
    },

    // update note object in noteData array
    updateNote: (state, action) => {
      state.noteData = state.noteData.map((note, index) =>
        index === action.payload.index
          ? {...note, ...action.payload.noteObject}
          : note,
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNote, removeNote, updateNote} = noteSlice.actions;

export default noteSlice.reducer;
