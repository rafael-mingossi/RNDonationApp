import React, {FC} from 'react';
import {ScrollView, SafeAreaView, Image, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BackArrow, Badge, Header} from '../../components';
import globalStyles from '../../../assets/styles/globalStyles';
import styles from './singleDonation.styles';
import {StackNavigatorParams} from '../../config/Navigator';
import {RouteProp} from '@react-navigation/native';

interface SingleDonationProps {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'SingleDonation'>;
  route: RouteProp<StackNavigatorParams, 'SingleDonation'>;
}

const SingleDonation: FC<SingleDonationProps> = ({navigation, route}) => {
  console.log('X ==>>', route?.params);

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
        />
        <View style={styles.header}>
          <Header size={'lg'} text={route?.params?.val?.name} />
        </View>
        <Text style={styles.description}>
          {route?.params?.val?.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonation;
