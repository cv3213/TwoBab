import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  AppRegistry,
  Alert
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import CheckBox from "react-native-check-box";
import DialogShow from "./DialogShow";

const { width, height } = Dimensions.get("window");
export default class RegisterScreen extends Component {
  static navigationOptions = {
    headerTintColor: "#FFB300",
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    }
  };
  state = {
    name: "",
    age: "",
    id: "",
    pw: "",
    phone: "",
    school: "",
    focusName: false,
    focusAge: false,
    focusID: false,
    focusPW: false,
    focusPhone: false,
    focusSchool: false,
    gender: "male"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <DialogShow navigation={this.props.navigation} />
        <TextInput
          style={styles.input}
          placeholder="이름"
          underlineColorAndroid={
            this.state.focusName || this.state.name != "" ? "#FFB300" : "gray"
          }
          onChangeText={value => this.setState({ name: value })}
          value={this.state.name}
          name={"Name"}
          onFocus={this.setFocusName.bind(this, true)}
          onBlur={this.setFocusName.bind(this, false)}
        />
        <TextInput
          style={styles.input}
          placeholder="나이"
          underlineColorAndroid={
            this.state.focusAge || this.state.age != "" ? "#FFB300" : "gray"
          }
          onChangeText={value => this.setState({ age: value })}
          value={this.state.age}
          name={"Age"}
          onFocus={this.setFocusAge.bind(this, true)}
          onBlur={this.setFocusAge.bind(this, false)}
        />
        <View style={styles.row}>
          <CheckBox
            style={{ flex: 1, marginLeft: 50, marginTop: 5 }}
            onClick={() => {
              this.setState({ gender: "male" });
            }}
            isChecked={this.state.gender === "male"}
            rightText={"Male"}
            checkedImage={
              <Image
                source={require("../Images/checkedIcon.png")}
                style={{ width: 15, height: 15 }}
              />
            }
            unCheckedImage={
              <Image
                source={require("../Images/unCheckedIcon.png")}
                style={{ width: 15, height: 15 }}
              />
            }
          />
          <CheckBox
            style={{ flex: 1, marginTop: 5 }}
            onClick={() => {
              this.setState({ gender: "female" });
            }}
            isChecked={this.state.gender === "female"}
            rightText={"Female"}
            checkedImage={
              <Image
                source={require("../Images/checkedIcon.png")}
                style={{ width: 15, height: 15 }}
              />
            }
            unCheckedImage={
              <Image
                source={require("../Images/unCheckedIcon.png")}
                style={{ width: 15, height: 15 }}
              />
            }
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="소속"
          underlineColorAndroid={
            this.state.focusSchool || this.state.school != ""
              ? "#FFB300"
              : "gray"
          }
          onChangeText={value => this.setState({ school: value })}
          value={this.state.school}
          name={"school"}
          onFocus={this.setFocusSchool.bind(this, true)}
          onBlur={this.setFocusSchool.bind(this, false)}
        />
        <TextInput
          style={styles.input}
          placeholder="ID"
          underlineColorAndroid={
            this.state.focusID || this.state.id != "" ? "#FFB300" : "gray"
          }
          onChangeText={value => this.setState({ id: value })}
          value={this.state.id}
          name={"ID"}
          onFocus={this.setFocusID.bind(this, true)}
          onBlur={this.setFocusID.bind(this, false)}
        />
        <TextInput
          style={styles.input}
          placeholder="PW"
          underlineColorAndroid={
            this.state.focusPW || this.state.pw != "" ? "#FFB300" : "gray"
          }
          onChangeText={value => this.setState({ pw: value })}
          value={this.state.pw}
          name={"PW"}
          onFocus={this.setFocusPW.bind(this, true)}
          onBlur={this.setFocusPW.bind(this, false)}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          underlineColorAndroid={this.state.focusPhone ? "#FFB300" : "gray"}
          onChangeText={value => this.setState({ phone: value })}
          value={this.state.phone}
          name={"Phone"}
          onFocus={this.setFocusPhone.bind(this, true)}
          onBlur={this.setFocusPhone.bind(this, false)}
        />
        <TouchableOpacity
          style={styles.register}
          onPress={this.UserRegistrationFunction}
        >
          <Text style={styles.textFormat}>SIGN UP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
  UserRegistrationFunction = () => {
    const { name, age, id, pw, phone, school, gender } = this.state;

    fetch("http://192.168.43.24/register.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        age: age,
        id: id,
        pw: pw,
        phone: phone,
        school: school,
        gender: gender
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === "회원가입에 성공하였습니다.") {
          this.props.navigation.navigate("Login");
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  setFocusName(hasfocus) {
    this.setState({ focusName: hasfocus });
  }
  setFocusAge(hasfocus) {
    this.setState({ focusAge: hasfocus });
  }
  setFocusID(hasfocus) {
    this.setState({ focusID: hasfocus });
  }
  setFocusPW(hasfocus) {
    this.setState({ focusPW: hasfocus });
  }
  setFocusPhone(hasfocus) {
    this.setState({ focusPhone: hasfocus });
  }
  setFocusSchool(hasfocus) {
    this.setState({ focusSchool: hasfocus });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  input: {
    width: width - 100,
    fontSize: 16,
    fontFamily: "Gothic"
  },
  row: {
    flexDirection: "row"
  },
  register: {
    backgroundColor: "#FFB300",
    justifyContent: "center",
    width: width - 100,
    height: 50,
    margin: 10,
    borderRadius: 10
  },
  textFormat: {
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Gothic",
    textAlign: "center",
    color: "#fff"
  }
});
