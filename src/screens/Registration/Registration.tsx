import React, {FC, useRef} from 'react';
import {Alert, SafeAreaView, View, TextInput} from 'react-native';
import {BackArrow, Button, Header, Input} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/Navigator';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './registration.styles';

type LoginProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'Registration'>;
};

const Registration: FC<LoginProps> = ({navigation}) => {
  const passwordRef = useRef<TextInput | null>(null);
  const emailRef = useRef<TextInput | null>(null);

  return (
    <SafeAreaView style={[globalStyles.flex, globalStyles.backgroundWhite]}>
      <View style={styles.backBtn}>
        <BackArrow onPress={() => navigation.goBack()} />
      </View>
      <View
        style={[
          globalStyles.backgroundWhite,
          globalStyles.flex,
          globalStyles.paddings,
          styles.container,
        ]}>
        <View style={styles.header}>
          <Header size={'lg'} text={'Hello and Welcome!'} />
        </View>
        <Input
          label={'First & Last Name'}
          placeholder={'Your Name'}
          returnKeyType={'next'}
          // onChangeText={res => console.log(res)}
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <Input
          ref={emailRef}
          label={'Email'}
          placeholder={'name@email.co'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          // onChangeText={res => console.log(res)}
          onSubmitEditing={() => passwordRef.current?.focus()}
        />
        <Input
          ref={passwordRef}
          label={'Password'}
          placeholder={'*****'}
          secureTextEntry
          // onChangeText={res => console.log(res)}
        />
        <View style={styles.btn}>
          <Button
            onPress={() => Alert.alert('d')}
            sizeBtn={'md'}
            sizeTxt={'lg'}
            text={'Register'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Registration;
