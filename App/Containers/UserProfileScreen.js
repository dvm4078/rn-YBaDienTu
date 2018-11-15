import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import AppHeader from '../Components/AppHeader';
import { Container, Content, Thumbnail, Form, Input, Icon, Item, CheckBox, ListItem, DatePicker } from 'native-base';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/UserProfileScreenStyle'

class UserProfileScreen extends Component {
  render() {
    return (
      <Container>
        {/* <AppHeader /> */}
        <Content>
          <View style={{ height: 200, backgroundColor: '#aaa' }}>
            <Thumbnail
              large
              style={{ marginLeft: 'auto', marginRight: 'auto', width: 100, height: 100, marginTop: 35 }}
              source={{ uri: 'https://res.cloudinary.com/demo/image/upload/w_200,h_200,c_thumb,g_face,r_max/face_left.png' }}
            />
            <Text style={{ fontSize: 20, marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>Nguyễn Văn A</Text>
          </View>
          <ScrollView style={{ padding: 15 }}>
            <KeyboardAvoidingView
              behavior="padding"
              style={styles.fullScreenHeight}
            >
              <Form>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flexBasis: '25%', display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                    <Icon ios="ios-person" android="md-person" />
                    <Text style={{ lineHeight: 35, marginLeft: 5, fontSize: 14 }}>Họ tên:</Text>
                  </View>
                  <Item regular style={{ flexBasis: '75%', height: 40 }}>
                    <Input
                      ref="phone"
                      keyboardType="phone-pad"
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                    />
                  </Item>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flexBasis: '25%', display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                    <Icon ios="ios-person" android="md-person" />
                    <Text style={{ lineHeight: 35, marginLeft: 5, fontSize: 14 }}>Giới tính:</Text>
                  </View>
                  <View regular style={{ flexBasis: '75%', height: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ListItem>
                      <CheckBox checked={true} />
                      <Text>Nam</Text>
                      {/* <Body>
                      </Body> */}
                    </ListItem>
                    <ListItem>
                      <CheckBox checked={true} />
                      <Text>Nữ</Text>
                      {/* <Body>
                      </Body> */}
                    </ListItem>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flexBasis: '25%', display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                    <Icon ios="ios-person" android="md-person" />
                    <Text style={{ lineHeight: 35, marginLeft: 5, fontSize: 14 }}>Ngày sinh:</Text>
                  </View>
                  <View regular style={{ flexBasis: '75%', height: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <DatePicker
                      defaultDate={new Date(2018, 4, 4)}
                      minimumDate={new Date(2018, 1, 1)}
                      maximumDate={new Date(2018, 12, 31)}
                      locale={"en"}
                      timeZoneOffsetInMinutes={undefined}
                      modalTransparent={false}
                      animationType={"fade"}
                      androidMode={"default"}
                      placeHolderText="Chọn một ng"
                      textStyle={{ color: "green" }}
                      placeHolderTextStyle={{ color: "#d3d3d3" }}
                    // onDateChange={this.setDate}
                    />
                  </View>
                </View>
                {/* <Item rounded>
                  <Icon ios="ios-person" android="md-person" />
                  <Input
                    placeholder="Họ tên"
                    ref="phone"
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                  />
                </Item>
                <Item rounded>
                  <Icon ios="ios-person" android="md-person" />
                  <Input
                    placeholder="Họ tên"
                    ref="phone"
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                  />
                </Item> */}

              </Form>
            </KeyboardAvoidingView>
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen)
