import React, {Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {useScreens} from 'react-native-screens';
import MealsNavigator from './navigations/MealsNavigator';

//Redux related
import {createStore, combineReducers} from 'redux';
import mealsReducers from './store/reducers/meals';
import {Provider} from 'react-redux';

useScreens(); //for performance uses native screens example iOS uses UIViewController

console.disableYellowBox = true;

const rootReducer = combineReducers({
  meals: mealsReducers,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  // screen: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // text: {
  //   fontFamily: 'OpenSans-Bold',
  // },
});

export default App;
