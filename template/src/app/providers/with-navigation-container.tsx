import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

export const withNavigationContainer =
  (component: () => React.ReactNode) => () =>
    <NavigationContainer>{component()}</NavigationContainer>;
