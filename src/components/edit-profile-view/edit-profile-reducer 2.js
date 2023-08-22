import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: {
        description: "",
      },
    };

const editButtonSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserDescription: (state, action) => {
    state.currentUser.description = action.payload;
    },
  },
});

export const { updateUserDescription } = editButtonSlice.actions;

export default editButtonSlice.reducer;
