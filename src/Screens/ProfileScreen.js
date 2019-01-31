import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const { width, height } = Dimensions.get("window");
export default class ProfileScreen extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        source={require("../Images/profileIcon.png")}
        style={{ width: 30, height: 30, marginLeft: 110 }}
      />
    ),
    headerTintColor: "#FFB300",
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    }
  };
  state = {
    imageProfile: require("../Images/profileIcon.png"),
    imageHome: require("../Images/homeIcon.png"),
    imageSetting: require("../Images/settingIcon.png"),
    imageFocusCalender: require("../Images/focusCalender.png"),
    imageNonFocusCalender: require("../Images/nonFocusCalender.png"),
    imageFocusFilter: require("../Images/focusFilter.png"),
    imageNonFocusFilter: require("../Images/nonFocusFilter.png"),
    hasFocusFirst: false,
    hasFocusSecond: false
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                hasFocusFirst: true,
                hasFocusSecond: false
              });
            }}
          >
            <Image
              source={
                this.state.hasFocusFirst
                  ? this.state.imageFocusCalender
                  : this.state.imageNonFocusCalender
              }
              style={
                this.state.hasFocusFirst ? styles.focused : styles.nonFocused
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                hasFocusFirst: false,
                hasFocusSecond: true
              });
            }}
          >
            <Image
              source={
                this.state.hasFocusSecond
                  ? this.state.imageFocusFilter
                  : this.state.imageNonFocusFilter
              }
              style={
                this.state.hasFocusSecond ? styles.focused : styles.nonFocused
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  focused: {
    backgroundColor: "#FFB300",
    width: width / 2,
    height: height / 3
  },
  nonFocused: {
    backgroundColor: "#FFF",
    width: width / 2,
    height: height / 3
  }
});
