import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(50),
    backgroundColor: '#2979F2',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
  },
});

export default styles;
