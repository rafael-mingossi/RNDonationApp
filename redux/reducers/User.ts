import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  firstName: 'Rafa',
  lastName: 'Ming',
  userId: 1,
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
  },
});

export const {updateFirstName} = User.actions;
export default User.reducer;

// REDUCER =>> is a function that updates the state in response to an action
