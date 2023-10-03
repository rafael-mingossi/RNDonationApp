import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(20),
    paddingLeft: horizontalScale(20),
    paddingRight: horizontalScale(20),
    flex: 1,
    backgroundColor: 'white',
  },
});

export default styles;
