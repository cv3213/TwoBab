import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import HomeScreen from "../components/Screens/HomeScreen";
import CategoryScreen from "../components/Screens/CategoryScreen";
import LoginScreen from "../components/Screens/LoginScreen";
import RegisterScreen from "../components/Screens/RegisterScreen";
import ProfileScreen from "../components/Screens/ProfileScreen";
import React, { Component } from "react";

export default class App extends Component {
  render() {
    return <mainNavigator />;
  }
}

const stackNav = createStackNavigator({
  Home: { screen: HomeScreen },
  Category: { screen: CategoryScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen }
});
const switchNav = createSwitchNavigator({});
const mainNavigator = createAppContainer(Navigator);
