import React, {FC, useState} from 'react';
import {ScrollView, SafeAreaView, View, Text, Alert} from 'react-native';
import styles from './payment.styles';
import globalStyles from '../../../assets/styles/globalStyles';
import {BackArrow, Button, Header} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/Navigator';
import {STRIPEPUBLISHABLEKEY, ENDPOINT} from '@env';
import {
  CardForm,
  StripeProvider,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import {RouteProp} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

type PaymentProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'Payment'>;
  route: RouteProp<StackNavigatorParams, 'Payment'>;
};

const Payment: FC<PaymentProps> = ({navigation, route}) => {
  const [isReady, setIsReady] = useState(false);
  const {confirmPayment, loading} = useConfirmPayment();

  const user = useSelector((state: RootState) => state.user);
  // android-local: 'http://10.0.2.2:8000/create-payment-intent'
  // ios-local: 'http://localhost:8000/create-payment-intent'

  const fetchPaymentIntentClientSecret = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.user.email,
          currency: 'usd',
          amount: parseFloat(route.params.price) * 100,
        }),
      });

      const {clientSecret} = await response.json();
      return clientSecret;
    } catch (e) {
      console.log('TRY ===>>', e);
    }
  };
  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    if (!clientSecret) {
      return console.log('NO SECRET');
    }

    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });

    if (error) {
      Alert.alert('Error: ', error.localizedMessage);
    } else if (paymentIntent) {
      Alert.alert('SUCCESS!!');
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView style={[globalStyles.flex, globalStyles.paddings]}>
        <BackArrow onPress={() => navigation.goBack()} />
        <View style={styles.header}>
          <Header size={'lg'} text={'Payment Details'} />
        </View>
        <Text style={styles.text}>Donation amount ${route.params.price}</Text>
        <StripeProvider publishableKey={STRIPEPUBLISHABLEKEY}>
          <CardForm
            style={styles.card}
            onFormComplete={() => setIsReady(true)}
          />
        </StripeProvider>
      </ScrollView>
      <View style={styles.btn}>
        <Button
          isDisabled={!isReady || loading}
          isLoading={loading}
          onPress={async () => await handlePayment()}
          sizeBtn={'lg'}
          sizeTxt={'lg'}
          text={'Confirm Payment'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
