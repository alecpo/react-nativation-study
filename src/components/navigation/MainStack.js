import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../HomeScreen';
import FriendsScreen from '../FriendsScreen';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Friends: FriendsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#118800',
      },
      headerTintColor: '#fff',
    },
  },
);

export default MainStack;
