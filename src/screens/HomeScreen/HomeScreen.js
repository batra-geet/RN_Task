import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  clearApiData,
  clearFlightsData,
  flightsLoading,
  getFlightsData,
} from '../../redux/actions/HomeActions';
import styles from './HomeScreen.Styles';
import {Colors, ScreenNames} from '../../constants/AppConstants';
import plane from '../../assets/plane.png';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.flightsReducer);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    if (data.isSuccess) {
      dispatch(clearApiData());
      const flightsArray = data.flightsList.data.result;
      const filteredFlights = flightsArray.filter(item => {
        return (
          item.displayData.source.airport.cityName.toLowerCase() ===
            source.toLowerCase() &&
          item.displayData.destination.airport.cityName.toLowerCase() ===
            destination.toLowerCase()
        );
      });
      dispatch(flightsLoading(false));
      if (filteredFlights.length <= 0) {
        showAlert(
          '',
          `No Flights found between ${source} and ${destination}. Please Select between Delhi, Mumbai or Chennai`,
        );
        return;
      }
      navigation.navigate(ScreenNames.DETAILS_SCREEN, {
        flights: filteredFlights,
        isBookingFlow: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.isSuccess]);

  useEffect(() => {
    if (data.isSuccess) {
      dispatch(clearApiData());
    }
    if (data.isError) {
      dispatch(clearApiData());
    }
  }, [data.isSuccess, data.isError, dispatch]);

  const showAlert = (title, message) => Alert.alert(title, message);

  const searchForFlights = () => {
    dispatch(clearFlightsData());
    dispatch(getFlightsData());
  };

  const handleSearch = () => {
    if (!source || !destination) {
      showAlert('', 'Please select your source and destinations');
    } else if (source === destination) {
      showAlert('', 'Source and destination must be different');
    } else {
      searchForFlights();
    }
  };

  const handleBookingFlow = () => {
    let bookingList = [];
    bookingList = data?.flightsList?.data?.result.filter(
      item => item.isBooked === true,
    );
    if (!bookingList || bookingList?.length <= 0) {
      showAlert('', 'No Bookings Available');
      return;
    }
    navigation.navigate(ScreenNames.DETAILS_SCREEN, {
      flights: bookingList,
      isBookingFlow: true,
    });
  };

  const renderFlightSearchCard = () => {
    return (
      <View style={styles.searchCardContainer}>
        <Image source={plane} style={styles.logo} />
        <Text style={styles.motto}>Let's book your next flight...</Text>
        <TextInput
          editable={!data.isLoading}
          style={styles.input}
          placeholder="Enter source"
          value={source}
          onChangeText={text => setSource(text)}
        />
        <TextInput
          editable={!data.isLoading}
          style={styles.input}
          placeholder="Enter destination"
          value={destination}
          onChangeText={text => setDestination(text)}
        />
        {data.isLoading ? (
          <ActivityIndicator
            color={Colors.PRIMARY_BACKGROUND}
            size="large"
            style={styles.loader}
          />
        ) : (
          <>
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
              <Text style={styles.buttonText}>Search Flights</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleBookingFlow}>
              <Text style={styles.buttonText}>Your Bookings</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  return <View style={styles.container}>{renderFlightSearchCard()}</View>;
};

export default HomeScreen;
