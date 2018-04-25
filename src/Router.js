import { StackNavigator } from 'react-navigation';

import ScreenTwo from './screens/ScreenTwo';
import ScreenThree from './screens/ScreenThree';
import HomeScreen from './screens/HomeScreen';

export const AppNavigator = StackNavigator({
    ScreenOne: { screen: HomeScreen},
    ScreenTwo: { screen: ScreenTwo},
    ScreenThree: {screen: ScreenThree}
},{
  initialRouteName: 'ScreenOne',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2196F3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});