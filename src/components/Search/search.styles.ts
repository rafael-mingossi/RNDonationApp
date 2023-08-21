import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F9',
    borderRadius: horizontalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(14),
  },
  icon: {
    marginRight: horizontalScale(5),
  },
  input: {
    flex: 1,
    fontFamily: 'Inter',
    color: '#686C7A',
    fontSize: scaleFontSize(14),
    fontWeight: '400',
    lineHeight: scaleFontSize(14),
  },
});

export default styles;
