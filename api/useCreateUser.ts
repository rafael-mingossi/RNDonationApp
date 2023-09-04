import auth from '@react-native-firebase/auth';
import {useState} from 'react';

type CreateUserProps = {
  fullName: string;
  email: string;
  password: string;
};

const useCreateUser = () => {
  const [isSignUpLoading, setIsSignUpLoading] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState('');
  const [successSignUp, setSuccessSignUp] = useState('');
  const createUser = async ({fullName, email, password}: CreateUserProps) => {
    try {
      setIsSignUpLoading(true);
      const user = await auth().createUserWithEmailAndPassword(email, password);
      await user.user.updateProfile({displayName: fullName});
      setErrorSignUp('');
      setSuccessSignUp('Success! Your are being redirected!');
      setIsSignUpLoading(false);
      return user;
    } catch (e: any) {
      console.log('EEE =>>', e);
      if (e.code === 'auth/email-already-in-use') {
        setErrorSignUp('The email you entered is already in use.');
        setIsSignUpLoading(false);
      } else if (e.code === 'auth/invalid-email') {
        setErrorSignUp('Please enter a valid email address.');
        setIsSignUpLoading(false);
      }
      setErrorSignUp('Something went wrong with your request.');
      setIsSignUpLoading(false);
    }
  };

  return {isSignUpLoading, createUser, errorSignUp, successSignUp};
};

export default useCreateUser;
