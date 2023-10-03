import React, {FC, ReactNode} from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
  ViewStyle,
  ViewProps,
} from 'react-native';
import styles from './wrapper.styles';

interface WrapperProps extends ViewProps {
  children: ReactNode;
  customStyle?: ViewStyle;
}

const Wrapper: FC<WrapperProps> = props => {
  const {children, customStyle, ...rest} = props;
  const theme = useColorScheme();
  return (
    <SafeAreaView style={[styles.container, customStyle]} {...rest}>
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Wrapper;
