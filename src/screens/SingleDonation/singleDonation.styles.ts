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
    lineHeight: scaleFontSize(22),
    marginLeft: horizontalScale(5),
  },
  header: {
    marginTop: verticalScale(15),
    marginBottom: verticalScale(10),
  },
});

export default styles;
