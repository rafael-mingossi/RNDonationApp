import React, {FC, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {RadioButton} from 'react-native-paper';

const Profile: FC = () => {
  const [checked, setChecked] = useState('first');
  return (
    <View>
      <Text>Profile</Text>
      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
    </View>
  );
};

export default Profile;
