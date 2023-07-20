import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.map((user) => {
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          age: user.age,
        };
      });
    },

    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    updateUser: (state, action) => {
      const index = state.users.findIndex((x) => x.id === action.payload.id);
      state.users[index] = [
        action.payload.name,
        action.payload.email,
        action.payload.age,
      ];
    },
  },
});

export const { getUser, addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
