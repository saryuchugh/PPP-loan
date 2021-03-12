import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './Screens/MainScreen'
import CheckboxScreen from './Screens/CheckboxScreen'
import DetailsScreen from './Screens/DetailsScreen'
import Extra from './Screens/Extra'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default class App extends React.Component {
  render(){
  return (
    <View >
     <AppContainer/>
    </View>
  );
}
}
var AppNavigator = createSwitchNavigator({
  MainScreen : MainScreen,

  DetailsScreen:DetailsScreen,
  Extra:Extra
});

const AppContainer = createAppContainer(AppNavigator);
