import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {width: '100%'},
  blueTxt: {
    color: '#156CF7',
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(16),
    marginTop: verticalScale(15),
  },
  header: {
    width: '100%',
    marginBottom: verticalScale(20),
  },
  img: {
    width: horizontalScale(190),
    resizeMode: 'contain',
  },
  status: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: 'green',
    marginBottom: verticalScale(15),
  },
  error: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    color: 'red',
    marginBottom: verticalScale(15),
  },
});

export default styles;
