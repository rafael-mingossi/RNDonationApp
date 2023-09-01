import auth from '@react-native-firebase/auth';

type CreateUserProps = {
  fullName: string;
  email: string;
  password: string;
};

export const createUser = async ({
  fullName,
  email,
  password,
}: CreateUserProps) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.updateProfile({displayName: fullName});
    console.log('USR ->>', user);
    return user;
  } catch (e) {
    console.log('EEE =>>', e);
  }
};
