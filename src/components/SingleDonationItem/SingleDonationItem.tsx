import React, {FC} from 'react';
import {View, Image} from 'react-native';
import {Badge, Header} from '../index';
import styles from './singleDonationItem.styles';

interface SingleDonationItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
}

const SingleDonationItem: FC<SingleDonationItemProps> = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          source={{uri: uri}}
          // source={require('../../../assets/images/environment.jpeg')}
          style={styles.image}
        />
        <Badge
          sizeBtn={'sm'}
          sizeTxt={'sm'}
          text={badgeTitle}
          customStyle={styles.badgeStyles}
        />
      </View>
      <Header
        size={'sm'}
        text={donationTitle}
        customStyle={styles.headerGreen}
      />
      <Header
        size={'sm'}
        text={'$' + price.toFixed(2)}
        customStyle={styles.headerBlue}
      />
    </View>
  );
};

export default SingleDonationItem;
