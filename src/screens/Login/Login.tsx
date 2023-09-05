import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
  TextInput,
} from 'react-native';
import {Button, Input} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/Navigator';
import useLogInUser from '../../../api/useLogInUser';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './login.styles';

type LoginProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'Login'>;
};

const Login: FC<LoginProps> = ({navigation}) => {
  const passwordRef = useRef<TextInput | null>(null);
  const {setErrorSignIn, isLoginLoading, errorSignIn, loginUser} =
    useLogInUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setErrorSignIn('');
  }, [email, password]);

  return (
    <SafeAreaView style={[globalStyles.flex]}>
      <View
        style={[
          globalStyles.backgroundWhite,
          globalStyles.flex,
          globalStyles.paddings,
          styles.container,
        ]}>
        <Image
          source={require('../../../assets/images/login.png')}
          style={styles.img}
        />
        <Input
          label={'Email'}
          placeholder={'name@email.co'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          onChangeText={res => setEmail(res)}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <Input
          ref={passwordRef}
          label={'Password'}
          placeholder={'*****'}
          secureTextEntry
          onChangeText={res => setPassword(res)}
        />

        {errorSignIn.length > 0 && (
          <Text style={styles.error}>{errorSignIn}</Text>
        )}
        <View style={styles.btn}>
          <Button
            onPress={async () => await loginUser({email, password})}
            isDisabled={email.length <= 4 || password.length <= 4}
            isLoading={isLoginLoading}
            sizeBtn={'md'}
            sizeTxt={'lg'}
            text={'Login'}
          />
        </View>
        <Pressable onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.blueTxt}>Don't have an account?</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Login;
