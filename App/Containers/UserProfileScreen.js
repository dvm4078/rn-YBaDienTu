import React, { Component } from 'react'
import { ScrollView, KeyboardAvoidingView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import AppHeader from '../Components/AppHeader';
import {
  Container,
  Content,
  Thumbnail,
  Form,
  Input,
  Item,
  CheckBox,
  ListItem,
  DatePicker,
  Button
} from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
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
          <View style={{ height: 130, backgroundColor: '#156568' }}>
            <Button transparent style={{ position: 'absolute', top: 5, left: 5 }}>
              <Icon name="arrow-left" size={30} color="white" />
            </Button>
          </View>
          <View style={{ marginTop: -50, marginLeft: 'auto', marginRight: 'auto', width: 100, height: 100, }}>
            <Thumbnail
              large
              style={{ width: 100, height: 100, }}
              source={{ uri: 'https://res.cloudinary.com/demo/image/upload/w_200,h_200,c_thumb,g_face,r_max/face_left.png' }}
            />
            <Button rounded style={{ position: 'absolute', top: 65, right: 10, backgroundColor: 'white' }}>
              <Icon name="camera" size={20} color="#aaa" />
            </Button>
          </View>
          <View>
            <Text style={{ fontSize: 20, marginLeft: 'auto', marginRight: 'auto', color: 'black' }}>Nguyễn Văn A</Text>
            <Button transparent>
              <Icon name="pencil" size={20} color="#aaa" />
            </Button>
          </View>
          {/* <ScrollView style={{ padding: 15 }}>
            <KeyboardAvoidingView
              behavior="padding"
              style={styles.fullScreenHeight}
            >
              <Form>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flexBasis: '25%', display: 'flex', flexDirection: 'row', marginTop: 10 }}>
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
                    <Text style={{ lineHeight: 35, marginLeft: 5, fontSize: 14 }}>Giới tính:</Text>
                  </View>
                  <View regular style={{ flexBasis: '75%', height: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <ListItem>
                      <CheckBox checked={true} />
                      <Text>Nam</Text>
                    </ListItem>
                    <ListItem>
                      <CheckBox checked={true} />
                      <Text>Nữ</Text>
                     
                    </ListItem>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flexBasis: '25%', display: 'flex', flexDirection: 'row', marginTop: 10 }}>
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
                    />
                  </View>
                </View>
              </Form>
            </KeyboardAvoidingView>
          </ScrollView> */}
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
