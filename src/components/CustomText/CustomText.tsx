import React, {FC, ReactNode} from 'react';
import {Text, useColorScheme, ViewStyle} from 'react-native';
import styles from './customText.styles';

interface TextProps {
  children: ReactNode;
  customStyle?: ViewStyle;
}

const CustomText: FC<TextProps> = props => {
  const {children, customStyle, ...rest} = props;
  const theme = useColorScheme();
  return (
    <Text style={[styles.mainTxt, customStyle]} {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;
