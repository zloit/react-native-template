/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/zloit/react-native-template
 *
 * @format
 */

import 'react-native-gesture-handler';

import React from 'react';

import {withProviders} from './providers';
import {Router} from './router';

const App = () => <Router />;

export default withProviders(App);
