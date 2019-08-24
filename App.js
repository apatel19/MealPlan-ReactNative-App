import React, {Fragment} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {useScreens} from 'react-native-screens';
import MealsNavigator from './navigations/MealsNavigator';

useScreens(); //for performance uses native screens example iOS uses UIViewController

console.disableYellowBox = true;

const App = () => {
  return <MealsNavigator />;
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
