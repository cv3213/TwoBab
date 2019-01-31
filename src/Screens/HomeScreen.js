import React, { Component } from "react";
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import ImageSlider from "react-native-image-slider";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./SettingScreen";

const { width, height } = Dimensions.get("window");
export default class HomeScreen extends Component {
  state = {
    imageSolo: require("../Images/soloIcon.png"),
    imageGroup: require("../Images/groupIcon.png"),
    imageFaq: require("../Images/faq.png"),
    imageNotice: require("../Images/notification.png"),
    imageProfile: require("../Images/profileIcon.png"),
    imageHome: require("../Images/homeIcon.png"),
    imageSetting: require("../Images/settingIcon.png"),
    isLogin: false,
    index: 1,
    routes: [
      { key: "Profile", title: "profile" },
      { key: "Setting", title: "Setting" }
    ]
  };
  static navigationOptions = {
    headerTitle: (
      <Image
        source={require("../Images/homeIcon.png")}
        style={{ width: 30, height: 30, marginLeft: (width - 30) / 2 }}
      />
    )
  };
  logout() {}
  renderTabBar = () => {
    <TabBar {...this.props} />;
  };
  render() {
    const images = [
      "https://placeimg.com/640/640/nature",
      "https://placeimg.com/640/640/people",
      "https://placeimg.com/640/640/animals",
      "https://placeimg.com/640/640/beer"
    ];
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#FFF"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.state.isLogin ? this.logout : navigate("Login");
          }}
        >
          <Text>{this.state.isLogin ? "로그아웃" : "로그인"}</Text>
        </TouchableOpacity>
        <ImageSlider images={images} style={styles.imageSlide} />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={styles.touchSolo}
            onPress={() => {
              navigate("Category");
            }}
          >
            <Image source={this.state.imageSolo} style={styles.image} />
            <Text style={{ fontSize: 16, fontWeight: "400" }}>개인신청</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchGroup}
            onPress={() => {
              navigate("Category");
            }}
          >
            <Image source={this.state.imageGroup} style={styles.image} />
            <Text style={{ fontSize: 16, fontWeight: "400" }}>단체신청</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity style={styles.touchFaq}>
            <Image source={this.state.imageFaq} style={styles.image} />
            <Text style={{ fontSize: 16, fontWeight: "400" }}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchNotice}>
            <Image source={this.state.imageNotice} style={styles.image} />
            <Text style={{ fontSize: 16, fontWeight: "400" }}>공지사항</Text>
          </TouchableOpacity>
        </View>

        <TabView
          style={{ backgroundColor: "#FFF" }}
          navigationState={this.state}
          renderScene={SceneMap({
            Profile: ProfileScreen,
            Setting: SettingScreen
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: width, height: height }}
          renderTabBar={this.renderTabBar}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  touchSolo: {
    flex: 1,
    backgroundColor: "#FFD067",
    margin: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  touchGroup: {
    flex: 1,
    backgroundColor: "#FFC846",
    margin: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  touchFaq: {
    flex: 1,
    backgroundColor: "#FCAA1B",
    margin: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  touchNotice: {
    flex: 1,
    backgroundColor: "#FFA200",
    margin: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomNavigation: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: width
  },
  image: {
    flex: 1,
    alignItems: "center"
  },
  imageSlide: {
    flex: 2
  }
});
