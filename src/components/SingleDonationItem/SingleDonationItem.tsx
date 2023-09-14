import React, {FC} from 'react';
import {View, Image, Pressable, PressableProps} from 'react-native';
import {Badge, Header} from '../index';
import styles from './singleDonationItem.styles';

interface SingleDonationItemProps extends PressableProps {
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
  ...rest
}) => {
  return (
    <Pressable style={styles.container} {...rest}>
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
          useInSmallCard={true}
          customStyle={styles.badgeStyles}
        />
      </View>
      <Header
        size={'sm'}
        text={donationTitle}
        customStyle={styles.headerGreen}
        numberOfLines={1}
      />
      <Header
        size={'sm'}
        text={'$' + price.toFixed(2)}
        customStyle={styles.headerBlue}
      />
    </Pressable>
  );
};

export default SingleDonationItem;
