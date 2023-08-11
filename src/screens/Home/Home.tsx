import React, {FC} from 'react';
import {Text, View, SafeAreaView, Image, Alert} from 'react-native';
import {Header, Button, Tab} from '../../components';
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
        <Tab />
        <Button
          onPress={() => Alert.alert('d')}
          sizeBtn={'lg'}
          sizeTxt={'lg'}
          text={'Donate'}
          isDisabled={false}
          isActive={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
