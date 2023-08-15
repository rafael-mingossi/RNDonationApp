import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './singleDonationItem.styles';

interface SingleDonationItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
}

const SingleDonationItem: FC<SingleDonationItemProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Donation</Text>
    </View>
  );
};

export default SingleDonationItem;
