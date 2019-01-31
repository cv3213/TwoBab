import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import CategoryScreen from "./src/Screens/CategoryScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import SettingScreen from "./src/Screens/SettingScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

const { width, height } = Dimensions.get("window");
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const BottomTabNav = createBottomTabNavigator(
  {
    HomeScreen,
    ProfileScreen,
    SettingScreen
  },
  {
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: (
          <Image
            source={require("./src/Images/homeIcon.png")}
            style={{ width: 30, height: 30, marginLeft: (width - 30) / 2 }}
          />
        )
      };
    }
  }
);

const BottomStackNav = createStackNavigator({
  DashboardTabNav: BottomTabNav,
  Category: { screen: CategoryScreen }
});

const DrawerNav = createDrawerNavigator({
  Dashboard: { screen: BottomStackNav }
});

const switchNav = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: DrawerNav }
});

const AppContainer = createAppContainer(switchNav);
