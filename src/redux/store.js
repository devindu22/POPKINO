import {configureStore} from '@reduxjs/toolkit';
import NoteReducer from './noteSlice';

export const store = configureStore({
  reducer: {
    notes: NoteReducer,
  },
});
