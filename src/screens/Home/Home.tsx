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
import {
  Header,
  Tab,
  Search,
  SingleDonationItem,
  Wrapper,
} from '../../components';
import styles from './home.styles';
import globalStyles from '../../../assets/styles/globalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {updateSelectedDonationId} from '../../../redux/reducers/Donations';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/Navigator';
import useLogOutUser from '../../../api/useLogOutUser';

type DonationsType = {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: Array<number>;
  price: string;
};

type HomeProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, 'Home'>;
};

const Home: FC<HomeProps> = ({navigation}) => {
  const user = useSelector((state: RootState) => state.user);
  const cat = useSelector((state: RootState) => state.categories);
  const donations = useSelector((state: RootState) => state.donations);
  const dispatch = useDispatch();

  const {logOut} = useLogOutUser();
  const [donationItems, setDonationItems] = useState<DonationsType[]>([]);
  const getCategory = (): string => {
    if (cat.selectedCategoryId) {
      return cat.categories.filter(
        res => res.categoryId === cat.selectedCategoryId,
      )[0].name;
    } else {
      return 'Cat';
    }
  };

  useEffect(() => {
    if (cat.selectedCategoryId) {
      const items = donations.items.filter(val => {
        return (
          cat.selectedCategoryId &&
          val.categoryIds.includes(cat.selectedCategoryId)
        );
      });
      setDonationItems(items);
    }
  }, [cat.selectedCategoryId, donations]);

  // console.log('USER HOME ==>>>', user);

  return (
    <Wrapper>
      <View style={[styles.headerContainer]}>
        <View>
          <Text style={styles.hello}>Hello,</Text>
          <Header
            size={'lg'}
            text={user ? user?.user?.displayName + '👋' : 'Stranger' + '👋'}
          />
        </View>
        <Pressable
          onPress={() => {
            // logOut();
            navigation.navigate('Profile');
          }}>
          <Image
            source={{uri: user.profileImage}}
            // source={require('../../../assets/images/headerIcon.png')}
            style={styles.headerImage}
          />
        </Pressable>
      </View>
      <View style={styles.searchContainer}>
        <Search
          onSearch={val => console.log(val)}
          placeHolder={'Search by name'}
        />
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

      {donationItems.length && cat.selectedCategoryId ? (
        <View style={styles.singleDonationWrapper}>
          {donationItems.map(val => {
            const categoryInfo = cat.categories.find(
              res => res.categoryId === cat.selectedCategoryId,
            );

            return (
              <View key={val.price}>
                <SingleDonationItem
                  onPress={() => {
                    dispatch(updateSelectedDonationId(val));
                    navigation.navigate('SingleDonation', {
                      val,
                      categoryInfo,
                    });
                  }}
                  uri={val.image}
                  badgeTitle={getCategory()}
                  donationTitle={val.name}
                  price={parseFloat(val.price)}
                />
              </View>
            );
          })}
        </View>
      ) : (
        <View>
          <Text>Select a Category to Display the Items!</Text>
        </View>
      )}
    </Wrapper>
  );
};

export default Home;
