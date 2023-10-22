import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counterSlice'

const store = configureStore({
  reducer: {
    counterReducer : counterSlice
  },
});

export default store
