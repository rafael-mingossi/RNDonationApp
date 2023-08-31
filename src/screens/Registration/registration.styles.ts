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

  header: {
    width: '100%',
    marginBottom: verticalScale(20),
  },
  img: {
    width: horizontalScale(190),
    resizeMode: 'contain',
  },
  backBtn: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },
});

export default styles;
