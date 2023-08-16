import React, {FC} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import styles from './header.styles';

interface HeaderProps {
  size: 'sm' | 'md' | 'lg';
  text: string | number;
  customStyle?: ViewStyle | TextStyle;
}
const Header: FC<HeaderProps> = ({size, text, customStyle}) => {
  const sizes = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  };

  return (
    <View>
      <Text style={[styles.title, sizes[size], customStyle]}>{text}</Text>
    </View>
  );
};

export default Header;
