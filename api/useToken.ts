import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {updateToken} from '../redux/reducers/User';

const useToken = () => {
  const dispatch = useDispatch();

  const checkToken = async () => {
    try {
      let res = await auth().currentUser?.getIdToken(true);
      console.log('TOKEN IS BEING UPDATED');
      dispatch(updateToken(res));
    } catch (e) {
      console.log('CHECK TOKEN ==>>', e);
    }
  };

  return {checkToken};
};

export default useToken;
