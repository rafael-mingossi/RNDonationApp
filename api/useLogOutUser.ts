import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {resetToInitialState} from '../redux/reducers/User';

const UseLogOutUser = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    try {
      auth()
        .signOut()
        .then(() => {
          dispatch(resetToInitialState());
          console.log('User OUT! =>');
        });
    } catch (e) {
      console.log('LOGOUT ==>>', e);
    }
  };

  return {logOut};
};

export default UseLogOutUser;
