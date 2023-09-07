import React, {FC, useEffect} from 'react';
import {ScrollView, SafeAreaView, Image, Text, View, Alert} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BackArrow, Badge, Button, Header} from '../../components';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './singleDonation.styles';
import {StackNavigatorParams} from '../../config/Navigator';
import {RouteProp} from '@react-navigation/native';

interface SingleDonationProps {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'SingleDonation'>;
  route: RouteProp<StackNavigatorParams, 'SingleDonation'>;
}

const SingleDonation: FC<SingleDonationProps> = ({navigation, route}) => {
  let price: string;
  if (route.params) {
    price = route.params.val.price;
  }
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView
        style={[globalStyles.paddings, globalStyles.flex]}
        showsVerticalScrollIndicator={false}>
        <BackArrow onPress={() => navigation.goBack()} />
        <Image source={{uri: route?.params?.val?.image}} style={styles.image} />
        <Badge
          sizeBtn={'md'}
          sizeTxt={'md'}
          text={route?.params?.categoryInfo?.name}
          // customStyle={styles.bubble}
        />
        <View style={styles.header}>
          <Header size={'lg'} text={route?.params?.val?.name} />
        </View>
        <Text style={styles.description}>
          {route?.params?.val?.description}
        </Text>
      </ScrollView>
      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate('Payment', {price})}
          sizeBtn={'lg'}
          sizeTxt={'lg'}
          text={'Donate'}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonation;
