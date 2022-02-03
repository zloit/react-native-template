import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {routerConfig} from 'pages';
import {HomeScreen} from 'pages/root/home';

const Stack = createStackNavigator<routerConfig.ParamList>();

export const Router = () => (
  <Stack.Navigator>
    <Stack.Screen name={routerConfig.routeMap.home} component={HomeScreen} />
  </Stack.Navigator>
);
