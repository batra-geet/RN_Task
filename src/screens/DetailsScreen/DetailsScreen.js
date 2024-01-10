import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './DetailScreen.styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  flightsDataSuccess,
  flightsLoading,
} from '../../redux/actions/HomeActions';
import flightLogo from '../../assets/flightLogo.png';

const DetailsScreen = ({route}) => {
  const {flights, isBookingFlow} = route.params;
  const dispatch = useDispatch();
  const data = useSelector(state => state.flightsReducer);

  /**
   * this method sets the flight no as booked and save it to redux
   * @param {string} id unique booking if a flight
   */
  const handleBooking = id => {
    dispatch(flightsLoading(true));
    console.log(data.flightsList);
    const updatedList = data.flightsList.data.result.map(item => {
      if (item.id === id) {
        item.isBooked = true;
      }
      return item;
    });
    dispatch(
      flightsDataSuccess({
        ...data.flightsList,
        data: {
          result: updatedList,
        },
      }),
    );
    dispatch(flightsLoading(false));
    Alert.alert('', 'Flight has been Booked! Thanks.');
  };

  const renderDivider = () => {
    return (
      <View style={styles.dividerContainer}>
        <View style={styles.circularDot} />
        <View style={styles.lineStyle} />
        <View style={styles.circularDot} />
      </View>
    );
  };

  const renderFlightInfo = item => {
    const {
      fare,
      displayData: {source, destination, airlines},
    } = item;
    return (
      <>
        <View style={styles.flightInfoContainer}>
          <View style={styles.flightNameContainer}>
            <Image source={flightLogo} style={styles.logoStyle} />
            <Text style={styles.flightName}>{airlines[0].airlineName}</Text>
          </View>
          <Text style={styles.fareTextStyle}>₹{fare}</Text>
        </View>
        <View style={styles.cityDetailsContainer}>
          <View>
            <Text style={styles.cityCode}>{source.airport.cityCode}</Text>
            <Text style={styles.cityName}>{source.airport.cityName}</Text>
          </View>
          {renderDivider()}
          <View>
            <Text style={styles.cityCode}>{destination.airport.cityCode}</Text>
            <Text style={styles.cityName}>{destination.airport.cityName}</Text>
          </View>
        </View>
      </>
    );
  };

  const renderDetails = (
    leftLabel,
    leftValue,
    rightLabel,
    rightValue,
    containerStyle,
  ) => {
    return (
      <View style={[styles.detailsContainer, containerStyle]}>
        <View style={styles.sectionWidth}>
          <Text style={styles.labelStyle}>{leftLabel}</Text>
          <Text style={styles.valueStyle}>{leftValue}</Text>
        </View>

        <View style={styles.sectionWidth}>
          <Text style={styles.labelStyle}>{rightLabel}</Text>
          <Text style={styles.valueStyle}>{rightValue}</Text>
        </View>
      </View>
    );
  };

  const getDate = date => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
    const day = dateObject.getDate();
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    return [`${day}/${month}/${year}`, `${hours}:${minutes}`];
  };

  const renderItem = item => {
    const {
      displayData: {source, destination, stopInfo},
      id,
    } = item.item;
    return (
      <View style={styles.listItemStyle}>
        <View style={styles.cardWprStyle}>
          {renderFlightInfo(item.item)}
          {renderDetails(
            'Departure Date',
            getDate(source.depTime)[0],
            'TIME',
            `${getDate(source.depTime)[1]}-${getDate(destination.arrTime)[1]} `,
            {
              marginTop: 32,
            },
          )}
          {!isBookingFlow && (
            <>
              {renderDetails('Stop', stopInfo, 'BAGGAGE', '25Kg')}
              {renderDetails(
                'Source Terminal',
                source.airport.terminal,
                'Dest Terminal',
                destination.airport.terminal,
              )}
              <TouchableOpacity
                onPress={() => {
                  handleBooking(id);
                }}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Book Now</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isBookingFlow && (
        <View style={styles.bookingTextContainer}>
          <Text style={styles.bookingHeader}>Your Bookings</Text>
        </View>
      )}
      <FlatList
        data={flights}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DetailsScreen;
