import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boxes: [],
};

export const chatBoxAreaSlice = createSlice({
  name: 'chat-box-area',
  initialState,
  reducers: {
    addChatBox(state, action) {
      if (!state.boxes.some(({ id }) => action.payload.id === id)) {
        state.boxes.unshift(action.payload);
      }
    },
    removeChatBox(state, action) {
      state.boxes = state.boxes.filter(({ id }) => action.payload !== id);
    },
  },
});

export const { addChatBox, removeChatBox } = chatBoxAreaSlice.actions;

export default chatBoxAreaSlice.reducer;
