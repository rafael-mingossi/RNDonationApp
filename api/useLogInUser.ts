import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {logIn, updateToken} from '../redux/reducers/User';

type LoginProps = {
  email: string;
  password: string;
};
const useLogInUser = () => {
  const dispatch = useDispatch();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState('');
  const [status, setStatus] = useState(false);
  const [token, setToken] = useState('');

  const loginUser = async ({email, password}: LoginProps) => {
    try {
      setIsLoginLoading(true);
      const res = await auth().signInWithEmailAndPassword(email, password);
      console.log('HOOK ==>>', res);
      setToken(await res.user.getIdToken());
      dispatch(logIn(res));
      dispatch(updateToken(await res.user.getIdToken()));
      setErrorSignIn('');
      setStatus(true);
      setIsLoginLoading(false);
    } catch (e: any) {
      console.log('LOGIN ==>>', e.code);
      setErrorSignIn(e.code.toString().replace('auth/', 'Error: '));
      setIsLoginLoading(false);
    }
  };

  return {
    isLoginLoading,
    errorSignIn,
    status,
    token,
    setErrorSignIn,
    loginUser,
  };
};

export default useLogInUser;
