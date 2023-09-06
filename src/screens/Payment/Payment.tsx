import React, {FC} from 'react';
import {ScrollView, SafeAreaView, View} from 'react-native';
import styles from './payment.styles';
import globalStyles from '../../../assets/styles/globalStyles';
import {BackArrow, Button, Header, Input} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/Navigator';
import {STRIPEPUBLISHABLEKEY} from '@env';
import {CardForm, StripeProvider} from '@stripe/stripe-react-native';

type PaymentProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'Payment'>;
};

const Payment: FC<PaymentProps> = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        contentContainerStyle={[globalStyles.flex, globalStyles.paddings]}>
        <BackArrow onPress={() => navigation.goBack()} />
        <View style={styles.header}>
          <Header size={'lg'} text={'Payment Details'} />
        </View>
        {/*<Input*/}
        {/*  label={'Card Holder Name'}*/}
        {/*  placeholder={'e.g. John Doe'}*/}
        {/*  returnKeyType={'next'}*/}
        {/*  // onChangeText={res => setEmail(res)}*/}
        {/*  // onSubmitEditing={() => passwordRef.current?.focus()}*/}
        {/*/>*/}
        {/*<Input*/}
        {/*  label={'Card Number'}*/}
        {/*  placeholder={'e.g. 0000 0000 0000 0000'}*/}
        {/*  returnKeyType={'next'}*/}
        {/*  // onChangeText={res => setEmail(res)}*/}
        {/*  // onSubmitEditing={() => passwordRef.current?.focus()}*/}
        {/*/>*/}
        {/*<View style={styles.dateCvv}>*/}
        {/*  <View style={styles.column}>*/}
        {/*    <Input*/}
        {/*      label={'Card Holder Name'}*/}
        {/*      placeholder={'Your Name'}*/}
        {/*      returnKeyType={'next'}*/}
        {/*      // onChangeText={res => setEmail(res)}*/}
        {/*      // onSubmitEditing={() => passwordRef.current?.focus()}*/}
        {/*    />*/}
        {/*  </View>*/}
        {/*  <View style={styles.column}>*/}
        {/*    <Input*/}
        {/*      label={'Card Holder Name'}*/}
        {/*      placeholder={'Your Name'}*/}
        {/*      returnKeyType={'next'}*/}
        {/*      // onChangeText={res => setEmail(res)}*/}
        {/*      // onSubmitEditing={() => passwordRef.current?.focus()}*/}
        {/*    />*/}
        {/*  </View>*/}
        {/*</View>*/}
        <StripeProvider publishableKey={STRIPEPUBLISHABLEKEY}>
          <CardForm style={styles.card} />
        </StripeProvider>
      </ScrollView>
      <View style={styles.btn}>
        <Button
          onPress={() => console.log('PAY')}
          sizeBtn={'lg'}
          sizeTxt={'lg'}
          text={'Confirm Payment'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
