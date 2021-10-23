export * as unauthorizedStackConfig from './config';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthErrorScreen} from './auth-error';
import {ParamList, routeNames} from './config';

const Stack = createStackNavigator<ParamList>();

export const UnauthorizedStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name={routeNames.authError} component={AuthErrorScreen} />
  </Stack.Navigator>
);
