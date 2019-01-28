import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Dialog, {
  SlideAnimation,
  DialogContent,
} from 'react-native-popup-dialog';

const { width, height } = Dimensions.get('window');
export default class DialogShow extends Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <Dialog
        visible={this.state.visible}
        dialogAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }>
        <DialogContent
          style={{
            borderWidth: 2,
            borderColor: '#FFB300',
            width: width - 50,
            height: height - 100,
          }}>
          <Text
            style={{
              color: '#FFB300',
              borderRadius: 5,
              borderWidth: 2,
              borderColor: '#FFB300',
            }}>
            개인정보 수집, 이용 및 제 3자 제공 동의 안내
          </Text>
          <ScrollView
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#FFB300',
            }}>
            <Text>
              개인정보보호법 등 관련 법규에 의거하여 두밥 서비스는 가입자의
              개인정보 수집 및 활용에 대해 개인정보 수집 및 활용 동의를 받고
              있습니다. 개인정보 제공자가 동의한 내용 외의 다른 목적으로
              활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할 때는
              개인정보 관리 책임자를 통해 열람, 정정, 삭제를 요구할 수 있습니다.
              제공된 개인 정보는 두밥 서비스의 아래 항목에 제한된 범위에서만
              활용됩니다. [개인정보 이용목적] - 본인 확인절차와 연락 및 조합원
              상호 정보공유 - 고지사랑 전달 등을 위한 원활한 의사소통 경로의
              확보 - 각종 우편물 발생시 정확한 배송지의 확보 - 관련 사업 자료
              공유 및 의견 교환을 위한 정보 공유 [효력 기간] -개인 정보
              제공시부터 서비스 탈퇴시까지 「개인정보보호법」 등 관련 법규에
              의거하여 상기 내용과 같이 본인은 개인정보 수집 및 활용에
              동의합니다 ① 개인정보를 제공받는 자 : ☆두밥☆주식회사 ② 개인정보를
              제공받는 자의 개인정보 이용 목적 : 봉사 관리 및 개인정보 관리 ③
              제공하는 개인정보의 항목 : 성명, 전화번호, 생년월일 ④ 개인정보를
              제공받는 자의 개인정보 보유 및 이용 기간 : 제공 후 1년 ⑤ 동의를
              거부할 수 있으며, 동의 거부시 ☆두밥☆ 서비스가 제공되지 않습니다.
            </Text>
          </ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#FFB300',
                justifyContent: 'center',
              }}
              onPress={() => {
                this.setState({ visible: false });
              }}>
              <Text style={{ textAlign: 'center' }}>동의</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#FFB300',
                justifyContent: 'center',
              }}
              onPress={() => {
                this.setState({ visible: false });
                this.props.navigation.goBack();
              }}>
              <Text style={{ textAlign: 'center' }}>거부</Text>
            </TouchableOpacity>
          </View>
        </DialogContent>
      </Dialog>
    );
  }
}
