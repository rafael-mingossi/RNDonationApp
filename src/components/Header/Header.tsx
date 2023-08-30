import React, {FC} from 'react';
import {Text, TextStyle, View, ViewStyle, TextProps} from 'react-native';
import styles from './header.styles';

interface HeaderProps extends TextProps {
  size: 'sm' | 'md' | 'lg';
  text: string | number | undefined;
  customStyle?: ViewStyle | TextStyle;
}
const Header: FC<HeaderProps> = ({size, text, customStyle, ...rest}) => {
  const sizes = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  };

  return (
    <View>
      <Text style={[styles.title, sizes[size], customStyle]} {...rest}>
        {text}
      </Text>
    </View>
  );
};

export default Header;
