import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(44),
    height: verticalScale(40),
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(26),
    borderWidth: 1,
    borderColor: '#eae9e9',
  },
});

export default styles;
