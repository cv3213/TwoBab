import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');
export default class LoginScreen extends Component {
  static navigationOptions = {
    headerTintColor: '#FFB300',
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
    },
  };
  state = {
    id: '',
    pw: '',
    focusID: false,
    focusPW: false,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputID}
          placeholder="ID"
          underlineColorAndroid={this.state.focusID ? '#FFB300' : 'gray'}
          onChangeText={value => this.setState({ id: value })}
          value={this.state.id}
          name={'id'}
          onFocus={this.setFocusID.bind(this, true)}
          onBlur={this.setFocusID.bind(this, false)}
        />
        <TextInput
          style={styles.inputPW}
          placeholder="PW"
          secureTextEntry={true}
          underlineColorAndroid={this.state.focusPW ? '#FFB300' : 'gray'}
          onChangeText={value => this.setState({ pw: value })}
          value={this.state.pw}
          name={'pw'}
          onFocus={this.setFocusPW.bind(this, true)}
          onBlur={this.setFocusPW.bind(this, false)}
        />
        <TouchableOpacity
          style={{ marginRight: 210 }}
          onPress={() => {
            navigate('Register');
          }}>
          <Text style={{ textAlign: 'left', fontSize: 12, color: 'gray' }}>
            회원가입
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login} onPress={this.UserLoginFunction}>
          <Text style={styles.textFormat}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  UserLoginFunction = () => {
    const { id, pw } = this.state;

    fetch('http://192.168.43.24/register.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
        pw: pw,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === '로그인에 성공하였습니다.') {
          this.props.navigation.navigate('Home', { isLogin: true });
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  setFocusID(hasfocus) {
    this.setState({ focusID: hasfocus });
  }
  setFocusPW(hasfocus) {
    this.setState({ focusPW: hasfocus });
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputID: {
    fontSize: 16,
    fontFamily: 'Gothic',
    width: width - 100,
  },
  inputPW: {
    fontSize: 16,
    fontFamily: 'Gothic',
    width: width - 100,
  },
  login: {
    backgroundColor: '#FFB300',
    justifyContent: 'center',
    width: width - 100,
    height: 50,
    margin: 10,
    borderRadius: 10,
  },
  textFormat: {
    fontSize: 16,
    fontFamily: 'Gothic',
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
  },
});
