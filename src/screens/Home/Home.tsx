import React, {FC, useState} from 'react';
import {Text, View, SafeAreaView, Image, Alert} from 'react-native';
import {Header, Button, Tab, Badge, Search} from '../../components';
import styles from './home.styles';
import globalStyles from '../../../assets/styles/globalStyles';

const Home: FC = () => {
  const [s, setS] = useState('');

  console.log(s);
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <View style={[globalStyles.paddings]}>
        <View style={[styles.container]}>
          <View>
            <Text style={styles.hello}>Hello,</Text>
            <Header size={'lg'} text={'Raf M.👋'} />
          </View>
          <Image
            source={require('../../../assets/images/headerIcon.png')}
            style={styles.headerIcon}
          />
        </View>
        <Search onSearch={val => setS(val)} />
        <Tab />
        <Button
          onPress={() => Alert.alert('d')}
          sizeBtn={'lg'}
          sizeTxt={'lg'}
          text={'Donate'}
        />

        <Badge sizeBtn={'md'} sizeTxt={'md'} text={'Environment'} />
        <Badge sizeBtn={'sm'} sizeTxt={'sm'} text={'Education'} />
        <Badge sizeBtn={'sm'} sizeTxt={'sm'} text={'Sports'} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
