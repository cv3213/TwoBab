import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const { width, height } = Dimensions.get("window");

const categoryAll = () => <View />;
const categoryKorea = () => <View />;
const categoryChina = () => <View />;
const categoryEurope = () => <View />;
const categoryJapan = () => <View />;
export default class CategoryScreen extends Component {
  static navigationOptions = {
    headerTintColor: "#FFB300",
    headerTitle: "음식 카테고리",
    headerRight: (
      <TouchableOpacity>
        <Image
          source={require("../Images/location.png")}
          style={{ width: 30, height: 30, marginRight: 20 }}
        />
      </TouchableOpacity>
    ),
    headerTitleStyle: {
      marginLeft: 50,
      fontSize: 23
    },
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    }
  };
  state = {
    index: 0,
    routes: [
      { key: "CategoryAll", title: "전체" },
      { key: "CategoryKorea", title: "한식" },
      { key: "CategoryChina", title: "중식" },
      { key: "CategoryEurope", title: "양식" },
      { key: "CategoryJapan", title: "일식" }
    ]
  };
  renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: "#FFB300" }}
      labelStyle={{ backgroundColor: "#FFF", color: "#FFB300" }}
      style={{ backgroundColor: "#FFF" }}
    />
  );
  render() {
    return (
      <TabView
        style={{ backgroundColor: "#FFF" }}
        navigationState={this.state}
        renderScene={SceneMap({
          CategoryAll: categoryAll,
          CategoryKorea: categoryKorea,
          CategoryChina: categoryChina,
          CategoryEurope: categoryEurope,
          CategoryJapan: categoryJapan
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: width, height: height }}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}

const styles = StyleSheet.create({});
