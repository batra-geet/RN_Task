import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/index';
import {Colors, ScreenNames} from '../constants/AppConstants';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';

const Stack = createNativeStackNavigator();

const ScreenStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.HOME_SCREEN}
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name={ScreenNames.HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: 'JetSetGo...',
          headerStyle: {
            backgroundColor: Colors.PRIMARY_TEXT,
          },
          headerTintColor: Colors.PRIMARY_BACKGROUND,
        }}
      />
      <Stack.Screen
        name={ScreenNames.DETAILS_SCREEN}
        component={DetailsScreen}
        options={{
          title: null,
          headerStyle: {
            backgroundColor: Colors.PRIMARY_BACKGROUND,
          },
          headerTintColor: Colors.PRIMARY_TEXT,
        }}
      />
    </Stack.Navigator>
  );
};

const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.SCREEN_STACK}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.SCREEN_STACK} component={ScreenStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatior;
