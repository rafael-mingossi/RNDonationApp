import React, {FC, useState} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {Header, Tab, Search, SingleDonationItem} from '../../components';
import styles from './home.styles';
import globalStyles from '../../../assets/styles/globalStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';

const Home: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View style={[globalStyles.paddings, globalStyles.flex]}>
        <View style={[styles.container]}>
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
            {/*<Header size={'lg'} text={'Raf M.👋'} />*/}
          </View>
          <Image
            source={require('../../../assets/images/headerIcon.png')}
            style={styles.headerIcon}
          />
        </View>
        <Search onSearch={val => console.log(val)} />
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
      </View>
    </SafeAreaView>
  );
};

export default Home;
