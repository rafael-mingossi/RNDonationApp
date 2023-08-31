import React, {ForwardedRef, forwardRef} from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import styles from './input.styles';

interface InputProps extends TextInputProps {
  label: string;
}

const Input = forwardRef<TextInput, InputProps>(
  ({label, ...rest}, ref: ForwardedRef<TextInput>) => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{label}</Text>
        <TextInput style={styles.input} {...rest} ref={ref} />
      </View>
    );
  },
);
export default Input;
