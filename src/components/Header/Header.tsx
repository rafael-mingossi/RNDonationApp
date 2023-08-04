import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './header.styles';

interface HeaderProps {
  size: 'sm' | 'md' | 'lg';
  text: string;
}
const Header: FC<HeaderProps> = ({size, text}) => {
  const sizes = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  };

  return (
    <View>
      <Text style={[styles.title, sizes[size]]}>{text}</Text>
    </View>
  );
};

export default Header;
