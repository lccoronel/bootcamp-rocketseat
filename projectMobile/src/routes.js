import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import User from './pages/user';

const routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      headerTitleAlingn: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
      },
    }
  )
);

export default routes;
