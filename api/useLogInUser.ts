import auth from '@react-native-firebase/auth';
import {useState} from 'react';

type LoginProps = {
  email: string;
  password: string;
};
const useLogInUser = () => {
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState('');
  const [successSignIn, setSuccessSignIn] = useState('');
  const [status, setStatus] = useState(false);
  const [loginRes, setLoginRes] = useState({});
  const [token, setToken] = useState('');

  const loginUser = async ({email, password}: LoginProps) => {
    try {
      setIsLoginLoading(true);
      const res = await auth().signInWithEmailAndPassword(email, password);
      setToken(await res.user.getIdToken());
      setLoginRes(res);
      setErrorSignIn('');
      setSuccessSignIn('Success! Your are being redirected!');
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
    successSignIn,
    status,
    token,
    loginRes,
    setErrorSignIn,
    loginUser,
  };
};

export default useLogInUser;
