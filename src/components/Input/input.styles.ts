import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(12),
    color: '#36455A',
    fontWeight: '400',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#838181',
    marginBottom: verticalScale(25),
    color: 'black',
    height: verticalScale(38),
  },
});

export default styles;
