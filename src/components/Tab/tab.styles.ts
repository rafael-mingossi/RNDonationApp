import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(15),
  },
  buttonsWrapper: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
  buttonWrapper: {
    marginRight: horizontalScale(10),
  },
});

export default styles;
