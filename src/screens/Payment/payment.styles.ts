import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scalling';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(40),
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
