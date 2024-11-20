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
  },
});

export const { likeRestaurant, dislikeRestaurant } = userSlice.actions;
export default userSlice.reducer;
