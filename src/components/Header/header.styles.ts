import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../utils/scalling';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontWeight: '600',
    color: 'black',
  },
  sm: {
    fontSize: scaleFontSize(16),
  },
  md: {
    fontSize: scaleFontSize(18),
  },
  lg: {
    fontSize: scaleFontSize(24),
    letterSpacing: scaleFontSize(0.48),
  },
});

export default styles;
