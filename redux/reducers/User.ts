import {createSlice} from '@reduxjs/toolkit';

// type UserData = {
//   displayName: string;
//   email: string;
//   emailVerified: boolean;
//   isAnonymous: boolean;
//   metadata: {};
//   multiFactor: {};
//   phoneNumber: string;
//   photoURL: string;
//   providerData: Array<{}>;
//   providerId: string;
//   refreshToken: string;
//   tenantId: string;
//   uid: string;
// };

type UsersType = {
  user: any;
  isLoggedIn: boolean;
  profileImage: string;
  token: string;
};

const initialState: UsersType = {
  user: {},
  isLoggedIn: false,
  token: '',
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logIn: (state, action) => {
      return {...state, ...{isLoggedIn: true}, ...action.payload};
    },
    resetToInitialState: () => {
      return initialState;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {logIn, resetToInitialState, updateToken} = User.actions;
export default User.reducer;

// REDUCER =>> is a function that updates the state in response to an action
