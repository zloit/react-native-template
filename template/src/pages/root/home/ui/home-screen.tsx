import React from 'react';
import {Text, View} from 'react-native';

import {routeNames, ScreenProps} from '../../../config';
import {styles} from './style';

interface HomeScreenProps extends ScreenProps<typeof routeNames.home> {}

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
};
