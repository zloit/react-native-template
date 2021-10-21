import compose from 'compose-function';

import {withNavigationContainer} from './with-navigation-container';

export const withProviders = compose(withNavigationContainer);
