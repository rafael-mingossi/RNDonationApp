import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
    marginTop: verticalScale(15),
    marginBottom: verticalScale(24),
  },
  description: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    color: 'black',
    fontWeight: '400',
    lineHeight: scaleFontSize(22),
    marginLeft: horizontalScale(5),
    marginBottom: verticalScale(15),
  },
  header: {
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10),
  },
  btn: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  bubble: {
    width: '100%',
  },
});

export default styles;
