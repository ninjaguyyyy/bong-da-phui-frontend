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
    swapChatBoxToFirst(state, action) {
      const index = state.boxes.findIndex((box) => box.id === action.payload);
      const temp = state.boxes[index];
      state.boxes[index] = state.boxes[0];
      state.boxes[0] = temp;
    },
  },
});

export const { addChatBox, removeChatBox, swapChatBoxToFirst } = chatBoxAreaSlice.actions;

export default chatBoxAreaSlice.reducer;
