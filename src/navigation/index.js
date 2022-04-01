// In App.js in a new project

import * as React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBar from './TabBar';
import Details from '../screen/Details';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux Import Here
import {useSelector, useDispatch} from 'react-redux';
import * as HomeAction from '../store/action/HomeAction';
import { COLORS } from '../constants';

const Stack = createNativeStackNavigator();

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',

  headerShown: false,
};

function App() {
  const dispatcher = useDispatch();
  const [AppLoading, setAppLoading] = React.useState(true);



  React.useEffect(() => {
    // addFavouritex()
    getMoviesList()
    getFavData();

    setTimeout(() => {
      setAppLoading(false);
    }, 5000);
  }, []);


  const getMoviesList = async () => {
    await dispatcher(HomeAction.GetHomeScreenData());
  };
  
  const addFavouritex = async (data) => {
    await dispatcher(HomeAction.ResetFav(data));
  };

  const getFavData = async () => {
    const value = await AsyncStorage.getItem("Fav");
    const transformedData = JSON.parse(value);
   console.log("transformedData",transformedData)
   addFavouritex(transformedData)
  };


  return (
    <>
      {AppLoading ? (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: COLORS.primary1,
            }}>
            <ActivityIndicator size="large" color={COLORS.primary} />
          </View>
        </>
      ) : (
        <>
          <NavigationContainer>
            <Stack.Navigator screenOptions={options}>
              <Stack.Screen name="Home" component={TabBar} />
              <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )}
    </>
  );
}

export default App;
