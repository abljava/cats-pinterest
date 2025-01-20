import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],
  },
  reducers: {
    setCards: (state, action) => {
      state.cards.push(...action.payload);
    },
    addToFavourite: (state, action) => {
      if (!state.favourites.some((i) => i.id === action.payload.id)) {
        state.favourites.push(action.payload);
        localStorage.setItem('favourites', JSON.stringify(state.favourites));
      } else {
        state.favourites = state.favourites.filter(
          (i) => i.id !== action.payload.id
        );
        localStorage.setItem('favourites', JSON.stringify(state.favourites));
      }
    },
  },
});

export const {
  setCards,
  addToFavourite,
} = cardsSlice.actions;

export default cardsSlice.reducer;
