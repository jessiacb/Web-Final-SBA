import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { swipes: { liked: [], disliked: [] } },
  reducers: {
    likeRestaurant: (state, action) => {
      state.swipes.liked.push(action.payload);
    },
    dislikeRestaurant: (state, action) => {
      state.swipes.disliked.push(action.payload);
    },
    resetSwipes: (state) => {
      state.swipes.liked = [];
      state.swipes.disliked = [];
    },
  },
});

export const { likeRestaurant, dislikeRestaurant, resetSwipes } = userSlice.actions;
export default userSlice.reducer;
