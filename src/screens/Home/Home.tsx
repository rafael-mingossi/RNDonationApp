import React, {FC} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../redux/store';
import {updateFirstName} from '../../../redux/reducers/User';

const Home: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  // dispatch(resetToInitialState());
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
        <View style={styles.singleDonationWrapper}>
          <SingleDonationItem
            // uri={'../../../assets/images/environment.jpeg'}
            badgeTitle={'Environment'}
            donationTitle={'Solitary Island Pic'}
            price={44}
          />
          <SingleDonationItem
            // uri={'../../../assets/images/environment.jpeg'}
            badgeTitle={'Environment'}
            donationTitle={'Solitary Island Pic'}
            price={44}
          />
        </View>
        <Pressable
          onPress={() => dispatch(updateFirstName({firstName: 'Rafael'}))}>
          <Text>PRESS ME!!!</Text>
        </Pressable>
        <Pressable
          onPress={() => dispatch(updateFirstName({firstName: 'Rafael'}))}>
          <Text>PRESS ME!!!</Text>
        </Pressable>
        <Pressable
          onPress={() => dispatch(updateFirstName({firstName: 'Rafael'}))}>
          <Text>PRESS ME!!!</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
