import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(142),
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  imgWrapper: {
    height: verticalScale(160),
    width: horizontalScale(142),
    marginBottom: verticalScale(10),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: horizontalScale(20),
    // resizeMode: 'contain',
  },
  content: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
  },
  headerGreen: {
    color: '#0A043C',
  },
  headerBlue: {
    color: '#156CF7',
    marginTop: verticalScale(5),
  },
  badgeStyles: {
    position: 'absolute',
    top: verticalScale(10),
    left: horizontalScale(10),
  },
});

export default styles;
