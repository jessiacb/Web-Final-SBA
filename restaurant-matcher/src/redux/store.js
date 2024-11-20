import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import restaurantSlice from './slices/restaurantSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    restaurants: restaurantSlice,
  },
});

export default store;
