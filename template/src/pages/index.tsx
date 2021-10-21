export * as routerConfig from './config';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthorizedStack} from './authorized';
import {ParamList, routeNames} from './config';
import {UnauthorizedStack} from './unauthorized';

const Stack = createStackNavigator<ParamList>();

export const Router = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={routeNames.authorized} component={AuthorizedStack} />
    <Stack.Screen
      name={routeNames.unauthorized}
      component={UnauthorizedStack}
    />
  </Stack.Navigator>
);
