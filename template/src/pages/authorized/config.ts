import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {routerConfig} from 'pages';
import {HelloWorldScreenConfig} from './hello-world';

export const name = 'authorized';

export const routeNames = {
  helloWorld: HelloWorldScreenConfig.routeName,
} as const;

export type ParamList = {
  [routeNames.helloWorld]: undefined;
};

type RouteNames = ValueOf<typeof routerConfig.routeNames>;

export type ScreenProps<P extends ValueOf<typeof routeNames>> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamList, P>,
    routerConfig.ScreenProps<RouteNames>['navigation']
  >;
  route: RouteProp<ParamList, P>;
};
