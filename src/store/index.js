import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../slices/cardSlice';

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export default store;
