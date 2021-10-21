import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './style';

export * as authErrorScreenConfig from './config';

interface HelloWorldScreenProps {}

export const AuthErrorScreen: React.FC<HelloWorldScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>You are unauthorized!</Text>
    </View>
  );
};
