import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import CheckboxScreen from '../Screens/CheckboxScreen';
import DetailsScreen  from '../Screens/DetailsScreen';




export const AppStackNavigator = createStackNavigator({
  CheckBoxScreen : {
    screen : CheckboxScreen,
    navigationOptions:{
      headerShown : false
    }
  },
 Details : {
    screen : DetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'CheckBoxScreen'
  }
);
