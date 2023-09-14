import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
  },
  text: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    fontFamily: 'Inter',
    fontSize: scaleFontSize(15),
    fontWeight: '600',
  },
  dateCvv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  btn: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  card: {
    height: verticalScale(250),
  },
});

export default styles;
