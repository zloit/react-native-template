export * as HelloWorldScreenConfig from './config';

import React from 'react';
import {Button, Text, View} from 'react-native';

import {unauthorizedStackConfig} from 'pages/unauthorized';
import {ScreenProps} from '../config';
import {routeName} from './config';
import {styles} from './style';

interface HelloWorldScreenProps extends ScreenProps<typeof routeName> {}

export const HelloWorldScreen: React.FC<HelloWorldScreenProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title={'unauthorize'}
        onPress={() =>
          navigation.navigate(unauthorizedStackConfig.name, {
            screen: unauthorizedStackConfig.routeNames.authError,
          })
        }
      />
    </View>
  );
};
