export * as authorizedStackConfig from './config';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ParamList, routeNames} from './config';
import {HelloWorldScreen} from './hello-world';

const Stack = createStackNavigator<ParamList>();

export const AuthorizedStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name={routeNames.helloWorld} component={HelloWorldScreen} />
  </Stack.Navigator>
);
