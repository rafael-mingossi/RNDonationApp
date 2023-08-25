import React, {FC, useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import {Header, Tab, Search, SingleDonationItem} from '../../components';
import styles from './home.styles';
import globalStyles from '../../../assets/styles/globalStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

type DonationsType = {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: Array<number>;
  price: string;
};

const Home: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const cat = useSelector((state: RootState) => state.categories);
  const donations = useSelector((state: RootState) => state.donations);

  const [donationItems, setDonationItems] = useState<DonationsType[]>([]);

  useEffect(() => {
    const items = donations.items.filter(val => {
      return (
        cat.selectedCategoryId &&
        val.categoryIds.includes(cat.selectedCategoryId)
      );
    });
    setDonationItems(items);
  }, [cat.selectedCategoryId]);

  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView style={[globalStyles.paddings, globalStyles.flex]}>
        <View style={[styles.headerContainer]}>
          <View>
            <Text style={styles.hello}>Hello,</Text>
            <Header
              size={'lg'}
              text={
                user
                  ? user.firstName + ' ' + user.lastName + '👋'
                  : 'Stranger' + '👋'
              }
            />
          </View>
          <Image
            source={{uri: user.profileImage}}
            // source={require('../../../assets/images/headerIcon.png')}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.searchContainer}>
          <Search onSearch={val => console.log(val)} />
        </View>
        <Pressable
          style={styles.highlightContainer}
          onPress={() => Alert.alert('PRESS')}>
          <Image
            source={require('../../../assets/images/highlighted_image.png')}
            style={styles.highlighted}
          />
        </Pressable>
        <Tab />
        {/*<Button*/}
        {/*  onPress={() => Alert.alert('d')}*/}
        {/*  sizeBtn={'lg'}*/}
        {/*  sizeTxt={'lg'}*/}
        {/*  text={'Donate'}*/}
        {/*/>*/}
        {donationItems.length > 0 && (
          <View style={styles.singleDonationWrapper}>
            {donationItems.map(val => (
              <SingleDonationItem
                uri={val.image}
                badgeTitle={
                  cat.categories.filter(
                    res => res.categoryId === cat.selectedCategoryId,
                  )[0].name
                }
                donationTitle={val.name}
                price={parseFloat(val.price)}
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
