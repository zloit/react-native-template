import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {routerConfig} from 'pages';
import {authErrorScreenConfig} from './auth-error';

export const name = 'unauthorized';

export const routeNames = {
  authError: authErrorScreenConfig.routeName,
} as const;

export type ParamList = {
  [routeNames.authError]: undefined;
};

type RouteNames = ValueOf<typeof routerConfig.routeNames>;

export type ScreenProps<P extends ValueOf<typeof routeNames>> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ParamList, P>,
    routerConfig.ScreenProps<RouteNames>['navigation']
  >;
  route: RouteProp<ParamList, P>;
};
