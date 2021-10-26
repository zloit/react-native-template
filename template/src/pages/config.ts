import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {authorizedStackConfig} from './authorized';
import {unauthorizedStackConfig} from './unauthorized';

export const routeNames = {
  authorized: authorizedStackConfig.name,
  unauthorized: unauthorizedStackConfig.name,
} as const;

export type ParamList = {
  [routeNames.authorized]: NavigatorScreenParams<authorizedStackConfig.ParamList>;
  [routeNames.unauthorized]: NavigatorScreenParams<unauthorizedStackConfig.ParamList>;
};

type RouteNames = ValueOf<typeof routeNames>;

export type ScreenProps<P extends RouteNames> = {
  navigation: StackNavigationProp<ParamList, P>;
  route: RouteProp<ParamList, P>;
};

export const routeMap = {
  authorized: {
    stackName: authorizedStackConfig.name,
    ...authorizedStackConfig.routeNames,
  },
  unauthorized: {
    stackName: unauthorizedStackConfig.name,
    ...unauthorizedStackConfig.routeNames,
  },
} as const;
