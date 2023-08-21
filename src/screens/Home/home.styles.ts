import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerImage: {
    height: verticalScale(50),
    width: horizontalScale(50),
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
  searchContainer: {
    marginVertical: verticalScale(15),
  },
  highlightContainer: {
    marginVertical: verticalScale(5),
    height: verticalScale(160),
  },
  highlighted: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default styles;
