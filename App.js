import React from 'react';

import {SafeAreaView, StyleSheet , StatusBar} from 'react-native';

import MainNavigation from './src/navigation';


// Redux Imports
import ReduxThunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import HomeReducer from './src/store/reducers/HomeReducer';



const rootReducer = combineReducers({
  HOME: HomeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'pink'}}>
      <StatusBar hidden={true} />

          <Provider store={store}>
          <MainNavigation />
       
          </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
