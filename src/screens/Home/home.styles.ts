import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerIcon: {
    height: 50,
    width: 50,
  },
  hello: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '400',
    color: '#636776',
  },
  singleDonationWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
