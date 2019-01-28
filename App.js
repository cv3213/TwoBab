import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import CategoryScreen from './components/CategoryScreen';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ProfileScreen from './components/ProfileScreen';

const mainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Profile: { screen: ProfileScreen },
});

const App = createAppContainer(mainNavigator);

export default App;
