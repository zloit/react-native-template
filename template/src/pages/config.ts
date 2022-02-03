import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export const routeNames = {
  home: 'home',
} as const;

export type ParamList = {
  [routeNames.home]: undefined;
};

type RouteNames = ValueOf<typeof routeNames>;

export type ScreenProps<P extends RouteNames> = {
  navigation: StackNavigationProp<ParamList, P>;
  route: RouteProp<ParamList, P>;
};

export const routeMap = {
  ...routeNames,
} as const;
