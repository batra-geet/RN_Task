import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/AppConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardWprStyle: {
    backgroundColor: Colors.WHITE,
    borderRadius: 16,
    padding: 16,
    borderColor: Colors.DARK_GRAY,
    borderWidth: 1,
  },
  nameText: {fontSize: 16, fontWeight: 'bold', color: Colors.BLACK},
  flightInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flightNameContainer: {flexDirection: 'row', alignItems: 'center'},
  logoStyle: {height: 16, width: 16},
  flightName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLACK,
    marginLeft: 8,
  },
  fareTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DARK_GRAY,
    marginLeft: 8,
  },
  cityDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cityCode: {fontSize: 18, fontWeight: 'bold', color: Colors.BLACK},
  cityName: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.DARK_GRAY,
    marginTop: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  sectionWidth: {minWidth: 120},
  labelStyle: {fontSize: 14, fontWeight: 'bold', color: Colors.DARK_GRAY},
  valueStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.BLACK,
    marginTop: 4,
  },
  buttonContainer: {
    backgroundColor: Colors.PRIMARY_BACKGROUND,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {fontSize: 16, fontWeight: 'bold', color: Colors.WHITE},
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  lineStyle: {
    height: 2,
    width: 200,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  circularDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  listItemStyle: {
    flex: 1,
    marginVertical: 12,
    padding: 1,
  },
  bookingTextContainer: {
    padding: 12,
    marginBottom: 12,
  },
  bookingHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PRIMARY_BACKGROUND,
  },
});
export default styles;
