import React, {FC} from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {Header, Button} from '../../components';
import styles from './home.styles';
import globalStyles from '../../../assets/styles/globalStyles';

const Home: FC = () => {
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
        <Button />
      </View>
    </SafeAreaView>
  );
};

export default Home;
