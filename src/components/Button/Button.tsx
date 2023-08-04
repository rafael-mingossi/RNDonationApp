import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './button.styles';

const Button = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Button</Text>
    </Pressable>
  );
};

export default Button;
